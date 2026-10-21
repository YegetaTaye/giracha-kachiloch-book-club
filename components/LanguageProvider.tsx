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
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored === "am" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "am" ? "am" : "en";
  }, [lang]);

  // Persist only on an explicit toggle. Writing from an effect stored the
  // initial "am" before the mount sync had run, which under StrictMode's
  // double-mount overwrote a saved "en".
  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "am" ? "en" : "am";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
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
