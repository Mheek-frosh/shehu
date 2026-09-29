import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

type SiteLanguage = 'en' | 'ha';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

const LANGUAGE_STORAGE_KEY = 'shehu-site-language';

function getSavedLanguage(): SiteLanguage {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'ha' ? 'ha' : 'en';
}

function applyLanguage(language: SiteLanguage): boolean {
  const selector = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (!selector || !Array.from(selector.options).some((option) => option.value === language)) return false;

  selector.value = language;
  selector.dispatchEvent(new Event('change', { bubbles: true }));
  return true;
}

function applyLanguageWhenReady(language: SiteLanguage) {
  let attempts = 0;
  const tryApply = () => {
    if (applyLanguage(language) || attempts >= 50) return;
    attempts += 1;
    window.setTimeout(tryApply, 100);
  };

  tryApply();
}

export default function LanguageToggle() {
  const [language, setLanguage] = useState<SiteLanguage>(getSavedLanguage);
  const languageRef = useRef(language);
  const translatorInitialized = useRef(false);
  const initializeTranslatorRef = useRef<() => void>(() => {});
  const { pathname } = useLocation();

  useEffect(() => {
    const initializeTranslator = () => {
      if (languageRef.current !== 'ha' || translatorInitialized.current) return;
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (!TranslateElement || !document.getElementById('google_translate_element')) return;

      new TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,ha', autoDisplay: false },
        'google_translate_element',
      );
      translatorInitialized.current = true;
      applyLanguageWhenReady(languageRef.current);
    };

    initializeTranslatorRef.current = initializeTranslator;
    window.googleTranslateElementInit = initializeTranslator;

    return () => {
      if (window.googleTranslateElementInit === initializeTranslator) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  useEffect(() => {
    languageRef.current = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;

    if (language === 'ha') {
      document.documentElement.classList.add('translating-hausa');
      const existingScript = document.querySelector<HTMLScriptElement>('[data-google-translate]');

      if (window.google?.translate?.TranslateElement) {
        initializeTranslatorRef.current();
      } else if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.dataset.googleTranslate = 'true';
        document.head.appendChild(script);
      }
    } else {
      if (!translatorInitialized.current) {
        document.documentElement.classList.remove('translating-hausa');
      }
      applyLanguageWhenReady(language);
    }
  }, [language]);

  useEffect(() => {
    applyLanguageWhenReady(language);
  }, [language, pathname]);

  return (
    <>
      <div id="google_translate_element" className="google-translate-host" aria-hidden="true" />
      <div
        className="inline-flex shrink-0 items-center rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm"
        role="group"
        aria-label="Choose website language"
      >
        {(['en', 'ha'] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={language === option}
            onClick={() => setLanguage(option)}
            className={`min-w-9 rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pdp-green)] ${
              language === option
                ? 'bg-[var(--color-pdp-green)] text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            title={option === 'en' ? 'English' : 'Hausa'}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
}