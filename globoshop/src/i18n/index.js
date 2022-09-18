import { createI18n } from "vue-i18n";
import en from "@/locales/en.json"; // Default Locale
import numberFormats from "./numberFormats";
import datetimeFormats from "./datetimeFormats";
import pluralRules from "./pluralRules";

export const DEFAULT_LOCALE = "en";
export const AVAILABLE_LOCALES = ["en", "ar", "de", "fr"];

export default createI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: "en",
  messages: {
    en,
  },
  numberFormats,
  datetimeFormats,
  pluralRules,
  legacy: false,

  // fallbackLocale: ["en", "fr"],
  // fallbackLocale: {
  //   de: ["fr"],
  //   default: ["en"],
  // },
  // globalInjection: true, // default: true
});
