"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./lib/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("bikemenow-language");
        if (savedLanguage && translations[savedLanguage]) {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("bikemenow-language", language);
        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language]);

    const value = useMemo(() => {
        return {
            language,
            setLanguage,
            t: translations[language],
        };
    }, [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}