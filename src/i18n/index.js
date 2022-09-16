import { createI18n } from "vue-i18n";

const messages = {
  en: {
    routes: {
      items: "Items",
      about: "About us",
    },
  },
  de: {
    routes: {
      items: "Artikel",
      about: "Über uns",
    },
  },
  fr: {
    routes: {
      items: "éléments",
      about: "À propos de nous",
    },
  },
};

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
});
