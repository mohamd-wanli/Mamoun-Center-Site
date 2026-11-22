import { t } from "../i18n/index.js";
// Only public, published content is requested. Never put credentials in this client.
function plainText(html = "") {
  if (!html) return "";
  const document = new DOMParser().parseFromString(html, "text/html");
  document.querySelectorAll("script, style").forEach((node) => node.remove());
  document.querySelectorAll("p, br, div, li").forEach((node) => node.append(" "));
  return (document.body.textContent || "").replace(/\s+/g, " ").trim();
}

function publicUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export async function fetchWordPressNews({ siteUrl, categorySlug = "news", signal }) {
  const base = publicUrl(siteUrl.trim());
  if (!base) throw new Error("Invalid WordPress site URL");
  const root = new URL(base);
  root.search = "";
  root.hash = "";
  root.pathname = `${root.pathname.replace(/\/$/, "")}/wp-json/wp/v2/`;

  async function request(resource, params) {
    const url = new URL(resource, root);
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url, { signal, credentials: "omit", headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`WordPress request failed (${response.status})`);
    const result = await response.json();
    if (!Array.isArray(result)) throw new Error("Unexpected WordPress response");
    return result;
  }

  const categories = await request("categories", { slug: categorySlug, per_page: "1" });
  // Never fall back to unrelated posts when the news category does not exist.
  if (!categories.length) return [];
  const posts = await request("posts", {
    categories: String(categories[0].id), status: "publish", per_page: "3",
    orderby: "date", order: "desc", _embed: "wp:featuredmedia",
  });
  return posts.filter((post) => post.status === "publish").map((post) => {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    const summary = plainText(post.excerpt?.rendered);
    return {
      id: post.id,
      title: plainText(post.title?.rendered) || t("أخبار المركز"),
      summary: summary.length > 220 ? `${summary.slice(0, 217)}…` : summary,
      date: post.date?.slice(0, 10),
      path: publicUrl(post.link),
      image: publicUrl(media?.source_url),
      imageAlt: media?.alt_text || "",
      category: t("أخبار المركز"),
    };
  });
}
