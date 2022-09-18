import { nextTick } from "vue";
import { DEFAULT_LOCALE, AVAILABLE_LOCALES } from "@/i18n";

//! Set Local to navigator locale if exists in locales
const extractLanguageFromLocale = (locale) => locale.split("-")[0];

export function getDefaultLocale() {
  const persistedLocale = localStorage.getItem("locale");
  if (persistedLocale) return persistedLocale;

  const navigatorLocale = navigator.language;
  const availableLocales = AVAILABLE_LOCALES;

  if (availableLocales.includes(navigatorLocale)) return navigatorLocale;

  const navigatorLanguage = extractLanguageFromLocale(navigatorLocale);
  if (
    availableLocales.includes(navigatorLanguage) &&
    navigatorLocale.split("-").length > 1
  )
    return navigatorLanguage;

  // return same language if found with different regions.
  const fallback = availableLocales.find(
    (locale) => extractLanguageFromLocale(locale) === navigatorLanguage
  );

  return fallback ?? DEFAULT_LOCALE;
}

// Change lang attribute of html tag
export function setHtmlLang(locale) {
  document.querySelector("html").setAttribute("lang", locale);
  if (locale.startsWith("ar"))
    document.querySelector("html").setAttribute("dir", "rtl");
  else document.querySelector("html").setAttribute("dir", "ltr");
}

//! Load Locale Messages -> Lazy Loading
export async function loadLocaleMessages(i18n, locale) {
  if (i18n.availableLocales.includes(locale)) return;

  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `@/locales/${locale}.json`
  );
  i18n.setLocaleMessage(locale, messages.default);

  return nextTick();
}

//? LOAD MESSAGES From json files in Locals folder -< Not Lazy Loading >- !! Not Used
/*
  function loadLocalesMessages() {
    const locales = require.context(
      "../locales",
      true,
      /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    console.log("locales", locales.keys());
    locales.keys().forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i);
      console.log("matched", matched);
      if (matched && matched.length > 1) {
        const locale = matched[1];
        messages[locale] = locales(key);
      }
    });
    return messages;
  }
*/

//? Get Supported Locales names from locales folder !! Not Used
/*
  function getSupportedLocals() {
    const locales = require.context(
      "../locales",
      true,
      /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const supportedLocales = [];
    locales.keys().forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i);
      if (matched && matched.length > 1) {
        const locale = matched[1];
        supportedLocales.push(locale);
      }
    });
    return supportedLocales;
  }
*/
