import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    supportedLangs: ["en", "ar"],
    interpolation: { escapeValue: false },
  });
const applyDirection = (lng) => {
  const lang = lng?.startsWith("ar") ? "ar" : "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
};
applyDirection(i18n.language);
i18n.on("languageChanged", applyDirection);
export default i18n;