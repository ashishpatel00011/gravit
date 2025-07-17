import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the type of the context value
interface LanguageContextType {
  language: "en" | "ar";
  toggleLanguage: () => void;
}

// Create the context with a default fallback value
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider props
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"en" | "ar">("ar");

  useEffect(() => {
    const storedLang = localStorage.getItem("app-language") as "en" | "ar" | null;
    if (storedLang) setLanguage(storedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("app-language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Optional: Custom hook for easier access
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
