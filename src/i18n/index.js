import { createI18n } from "vue-i18n";

const messages = {
  en: {
    routes: {
      items: "Items",
      about: "About us",
    },
    cart: {
      cart: "Cart",
      empty: "Your cart is empty",
      subtotal: "Subtotal",
      clearButton: "Remove this item",
    },
  },
  de: {
    routes: {
      items: "Artikel",
      about: "Über uns",
    },
    cart: {
      cart: "Warenkorb",
      empty: "Ihr Warenkorb ist leer",
      subtotal: "Zwischensumme",
      clearButton: "Diesen Artikel entfernen",
    },
  },
  fr: {
    routes: {
      items: "éléments",
      about: "À propos de nous",
    },
    cart: {
      cart: "Chariot",
      empty: "Votre panier est vide",
      subtotal: "Total",
      clearButton: "Enlever cet article",
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
