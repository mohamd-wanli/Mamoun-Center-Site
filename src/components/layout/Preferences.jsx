import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Globe, Sun, Moon, Monitor } from "lucide-react";
import { language } from "../../i18n";
import { localizedPath } from "../../i18n/navigation";
import "./Preferences.css";

export default function Preferences() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("mic-theme");
      return ["light", "dark", "system"].includes(saved) ? saved : "system";
    } catch {
      return "system";
    }
  });
  useEffect(() => {
    const query = matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const resolved =
        theme === "system" ? (query.matches ? "dark" : "light") : theme;
      document.documentElement.dataset.theme = resolved;
      document.documentElement.style.colorScheme = resolved;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", resolved === "dark" ? "#0c1422" : "#0b2145");
    };
    apply();
    query.addEventListener("change", apply);
    try {
      localStorage.setItem("mic-theme", theme);
    } catch {
    }
    return () => query.removeEventListener("change", apply);
  }, [theme]);

  const nextLanguage = language === "ar" ? "en" : "ar";
  const ThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  return (
    <div className="site-preferences">
      <a
        className="language-switch"
        lang={nextLanguage}
        hrefLang={nextLanguage}
        href={
          localizedPath(location.pathname, nextLanguage) +
          location.search +
          location.hash
        }
        onClick={() => {
          try {
            localStorage.setItem("mic-language", nextLanguage);
          } catch {
          }
        }}
        aria-label={
          language === "ar" ? "Switch to English" : "التبديل إلى العربية"
        }
      >
        <Globe size={14} aria-hidden="true" />
        <span className="lang-label-full">{nextLanguage === "en" ? "English" : "العربية"}</span>
        <span className="lang-label-short">{nextLanguage === "en" ? "EN" : "عربي"}</span>
      </a>
      <label className="theme-control">
        <ThemeIcon size={14} aria-hidden="true" />
        <span className="sr-only">
          {language === "en" ? "Color theme" : "مظهر الموقع"}
        </span>
        <select
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        >
          <option value="light">{language === "en" ? "Light" : "فاتح"}</option>
          <option value="dark">{language === "en" ? "Dark" : "داكن"}</option>
        </select>
      </label>
    </div>
  );
}
