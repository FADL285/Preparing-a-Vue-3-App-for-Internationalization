import { createI18n } from "vue-i18n";
import messages from "./messages";
import numberFormats from "./numberFormats";
import datetimeFormats from "./datetimeFormats";
import pluralRules from "./pluralRules";

const DEFAULT_LOCALE = "en";

// Set Local to navigator locale if exists in locales
const extractLanguageFromLocale = (locale) => locale.split("-")[0];

function getDefaultLocale() {
  const persistedLocale = localStorage.getItem("locale");
  if (persistedLocale) return persistedLocale;

  const availableLocales = Reflect.ownKeys(messages);
  const navigatorLocale = navigator.language;

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

export default createI18n({
  locale: getDefaultLocale(),
  fallbackLocale: "en",
  // fallbackLocale: ["en", "fr"],
  // fallbackLocale: {
  //   de: ["fr"],
  //   default: ["en"],
  // },
  legacy: false,
  // globalInjection: true, // default: true
  messages,
  numberFormats,
  datetimeFormats,
  pluralRules,
});
