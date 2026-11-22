import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import ts from "typescript";
import { localizedPath } from "../src/i18n/paths.js";
const ar = JSON.parse(
  fs.readFileSync(new URL("../src/i18n/ar.json", import.meta.url)),
);
const en = JSON.parse(
  fs.readFileSync(new URL("../src/i18n/en.json", import.meta.url)),
);

test("translations cover all Arabic keys and preserve interpolation variables", () => {
  assert.deepEqual(Object.keys(en).sort(), Object.keys(ar).sort());
  for (const key of Object.keys(ar)) {
    assert.ok(en[key].trim(), key);
    assert.equal(/[\u0600-\u06ff]/.test(en[key]), false, key);
    const slots = (value) =>
      [...value.matchAll(/{{(\w+)}}/g)].map((m) => m[1]).sort();
    assert.deepEqual(slots(en[key]), slots(ar[key]), key);
  }
});

test("every literal translation call resolves in both catalogs", () => {
  function walk(dir) {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, item.name);
      if (item.isDirectory()) walk(file);
      else if (/\.(js|jsx)$/.test(file)) {
        const source = ts.createSourceFile(
          file,
          fs.readFileSync(file, "utf8"),
          ts.ScriptTarget.Latest,
          true,
          ts.ScriptKind.JSX,
        );
        function visit(node) {
          if (
            ts.isCallExpression(node) &&
            node.expression.getText(source) === "t" &&
            ts.isStringLiteral(node.arguments[0])
          ) {
            assert.ok(
              Object.hasOwn(en, node.arguments[0].text),
              `${file}: ${node.arguments[0].text}`,
            );
          }
          ts.forEachChild(node, visit);
        }
        visit(source);
      }
    }
  }
  walk("src");
});

test("language paths preserve destinations, queries, hashes, and external links", () => {
  assert.equal(localizedPath("/courses/laravel", "en"), "/en/courses/laravel");
  assert.equal(localizedPath("/en/courses/laravel", "ar"), "/courses/laravel");
  assert.equal(
    localizedPath("/en/courses?q=web#details", "en"),
    "/en/courses?q=web#details",
  );
  assert.equal(localizedPath("/", "en"), "/en/");
  assert.equal(localizedPath("/en", "ar"), "/");
  assert.equal(localizedPath("/engineering", "en"), "/en/engineering");
  assert.equal(
    localizedPath("https://example.com/article", "en"),
    "https://example.com/article",
  );
  assert.equal(
    localizedPath("//example.com/article", "en"),
    "//example.com/article",
  );
  assert.equal(localizedPath("#details", "en"), "#details");
  assert.deepEqual(
    localizedPath(
      { pathname: "/contact", search: "?course=web", hash: "#form" },
      "en",
    ),
    { pathname: "/en/contact", search: "?course=web", hash: "#form" },
  );
});

function boot({
  pathname = "/",
  saved = {},
  dark = false,
  blocked = false,
} = {}) {
  let redirect;
  const root = { dataset: {}, style: {} };
  const context = {
    document: { documentElement: root, querySelector: () => null },
    location: {
      pathname,
      search: "?ref=test",
      hash: "#news",
      replace: (value) => {
        redirect = value;
      },
    },
    localStorage: {
      getItem: (key) => {
        if (blocked) throw Error("blocked");
        return saved[key];
      },
    },
    matchMedia: () => ({ matches: dark }),
  };
  vm.runInNewContext(fs.readFileSync("public/preferences.js", "utf8"), context);
  return { root, redirect };
}

test("theme boot respects explicit choice over system and handles unavailable storage", () => {
  assert.equal(
    boot({ saved: { "mic-theme": "light" }, dark: true }).root.dataset.theme,
    "light",
  );
  assert.equal(
    boot({ saved: { "mic-theme": "dark" }, dark: false }).root.dataset.theme,
    "dark",
  );
  assert.equal(boot({ dark: true }).root.dataset.theme, "dark");
  assert.equal(
    boot({ blocked: true, dark: false }).root.dataset.theme,
    "light",
  );
});

test("language boot restores root preference but respects explicit route language", () => {
  assert.equal(
    boot({ saved: { "mic-language": "en" } }).redirect,
    "/en/?ref=test#news",
  );
  assert.equal(boot({ pathname: "/en/courses" }).root.dir, "ltr");
  assert.equal(
    boot({ pathname: "/courses", saved: { "mic-language": "en" } }).root.dir,
    "rtl",
  );
});
