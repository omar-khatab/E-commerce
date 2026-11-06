import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isArabic = i18n.resolvedLanguage === "ar";

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <button onClick={toggleLanguage} className="language-switcher">
      {isArabic ? "English" : "العربية"}
    </button>
  );
}