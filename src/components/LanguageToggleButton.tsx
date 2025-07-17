import  { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggleButton() {
  const { i18n } = useTranslation();

  // Sync font class on body when language changes or on mount
  useEffect(() => {
    const currentLang = i18n.language || localStorage.getItem("lang") || "en";

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.body.classList.remove("font-arabic", "font-english");
    document.body.classList.add(currentLang === "ar" ? "font-arabic" : "font-english");
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);

    // The useEffect above will run automatically when i18n.language updates
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-md border border-[#1ab8b3] text-white hover:bg-[#1ab8b3]/20 transition-all duration-300"
    >
      {i18n.language === "en" ? "عربي" : "English"}
    </button>
  );
}
