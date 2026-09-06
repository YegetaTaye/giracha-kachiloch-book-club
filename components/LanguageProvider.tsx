"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionary, type Lang } from "@/content/i18n";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  t: (typeof dictionary)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "gracha-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("am");

  useEffect(() => {
    // One-time sync from a persisted preference on mount. Deliberately
    // defaults to "am" during SSR/first paint, then reconciles here —
    // the standard pattern for client-only stored preferences.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "am" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "am" ? "am" : "en";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "am" ? "en" : "am"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, toggle, t: dictionary[lang] }),
    [lang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
