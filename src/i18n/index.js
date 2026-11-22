import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar.json";
import en from "./en.json";

// The URL is the source of truth, including direct links and browser history.
export const language = /^\/en(?:\/|$)/.test(window.location.pathname) ? "en" : "ar";
export const locale = language === "en" ? "en-GB" : "ar-SY";

i18n.use(initReactI18next).init({
  lng: language,
  fallbackLng: "ar",
  resources: { ar: { translation: ar }, en: { translation: en } },
  keySeparator: false,
  nsSeparator: false,
  interpolation: { escapeValue: false },
  initImmediate: false,
});

export const t = (key, values) => i18n.t(key, values);
export default i18n;
