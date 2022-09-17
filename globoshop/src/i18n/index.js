import { createI18n } from "vue-i18n";
import messages from "./messages";
import numberFormats from "./numberFormats";
import datetimeFormats from "./datetimeFormats";
import pluralRules from "./pluralRules";

export default createI18n({
  locale: "en",
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
