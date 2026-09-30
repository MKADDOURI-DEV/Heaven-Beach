import { createContext, useContext, useState, useCallback, useEffect, useMemo, type ReactNode } from 'react';
import { translations, LANGUAGES, type Lang, type Translation, type LangDir } from './translations';
import { extraTranslations, type ExtraTranslation, type CategoryText } from './extra';

export type FullTranslation = Translation & ExtraTranslation;

interface LangContextValue {
  lang: Lang;
  dir: LangDir;
  t: FullTranslation;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = 'heaven-beach-lang';

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && ['fr', 'en', 'ar'].includes(stored)) return stored;
    }
    return 'fr';
  });

  const dir: LangDir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useMemo<FullTranslation>(
    () => ({ ...translations[lang], ...extraTranslations[lang] }),
    [lang],
  );

  const value = useMemo(() => ({ lang, dir, t, setLang }), [lang, dir, t, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

/**
 * Localized editorial content of an accommodation category.
 * Falls back to the French block when a category id is unknown.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useCategoryText(): (categoryId: string) => CategoryText {
  const { t } = useLang();
  return useCallback((categoryId: string) => t.cats[categoryId] ?? extraTranslations.fr.cats[categoryId], [t]);
}

/** Localized name of a bookable unit, e.g. "Suite 03" / "جناح 03". */
// eslint-disable-next-line react-refresh/only-export-components
export function useUnitName(): (unit: { id: string; categoryId: string }) => string {
  const catText = useCategoryText();
  return useCallback(
    (unit) => {
      const num = unit.id.split('-').pop() ?? '';
      return `${catText(unit.categoryId).unitSingular} ${num}`;
    },
    [catText],
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { LANGUAGES };
