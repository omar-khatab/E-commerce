// ============================================================================
// i18n Configuration
// إعدادات الترجمة واللغات للتطبيق
// ============================================================================

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation Resources | ملفات الترجمة
import en from "./locales/en.json"; // English translations | الترجمة الإنجليزية
import ar from "./locales/ar.json"; // Arabic translations  | الترجمة العربية

// i18n Initialization | تهيئة مكتبة الترجمة
i18n
  // Detect user language automatically | اكتشاف لغة المستخدم تلقائياً
  .use(LanguageDetector)

  // Bind i18n to React | React ربط الترجمة مع 
  .use(initReactI18next)

  // Main configuration | الإعدادات الرئيسية
  .init({
    // Available languages and their resources | اللغات المتاحة وملفاتها
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },

    // Default language if detection fails | اللغة الافتراضية عند فشل الاكتشاف
    fallbackLng: "en",

    // Whitelist of supported languages | اللغات المدعومة فقط في التطبيق
    supportedLngs: ["en", "ar"],

    // Interpolation settings | إعدادات إدخال المتغيرات داخل النصوص
    interpolation: {
      escapeValue: false,
    },
  });

// Direction & Language Handler | التحكم في اتجاه الصفحة واللغة
/**
 * Applies the correct `lang` and `dir` attributes to <html>
 * based on the active language.
 * @param {string} lng - Current language code | كود اللغة الحالي
 */
const applyDirection = (lng) => {
  // Normalize language: any Arabic variant -> "ar", otherwise -> "en"
  const lang = lng?.startsWith("ar") ? "ar" : "en";

  // Set HTML language attribute | تعيين لغة الصفحة
  document.documentElement.lang = lang;

  // Set text direction: RTL for Arabic, LTR for English
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
};

// Apply direction on initial load | تطبيق الاتجاه عند تحميل التطبيق لأول مرة
applyDirection(i18n.language);

// Re-apply direction whenever the language changes
i18n.on("languageChanged", applyDirection);

export default i18n;