export function localizedPath(to, lang) {
  if (typeof to === "object" && to !== null) return { ...to, pathname: localizedPath(to.pathname, lang) };
  if (typeof to !== "string" || !to.startsWith("/") || to.startsWith("//")) return to;
  const path = to.replace(/^\/en(?=\/|$|[?#])/, "") || "/";
  return lang === "en" ? `/en${path}` : path;
}
