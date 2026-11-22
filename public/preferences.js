// Runs before React and styles to avoid a flash of the wrong theme or direction.
(() => {
  const read = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
  const language = /^\/en(?:\/|$)/.test(location.pathname) ? "en" : "ar";
  // A root visit can restore a preference. Explicit language links save it first.
  if (location.pathname === "/" && read("mic-language") === "en") {
    location.replace(`/en/${location.search}${location.hash}`);
    return;
  }
  document.documentElement.lang = language;
  document.documentElement.dir = language === "en" ? "ltr" : "rtl";
  const preference = read("mic-theme");
  const dark = preference === "dark" || (preference !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  if (language === "en") {
    document.title = "Al-Mamoun International Center";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Professional and vocational training at Al-Mamoun International Center. Explore courses, services, student projects, and center news.");
  }
})();
