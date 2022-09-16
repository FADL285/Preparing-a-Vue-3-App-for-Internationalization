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
    aboutUs: {
      firstParagraph: "Learn more @.lower:routes.about{'.'}",
      secondParagraph:
        'This is a simple e-commerce application made with Vue.js and Vite. It uses the "fakestoreapi" to get the products and the "vue-i18n" library to translate the application.',
      popularItem:
        "The most popular item on the website is the {product}, but not for long!",
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
    aboutUs: {
      firstParagraph: "Erfahren Sie mehr @.lower:routes.about{'.'}",
      secondParagraph:
        'Dies ist eine einfache E-Commerce-Anwendung, die mit Vue.js und Vite erstellt wurde. Es verwendet die "fakestoreapi", um die Produkte zu erhalten und die Bibliothek "vue-i18n", um die Anwendung zu übersetzen.',
      popularItem:
        "Der beliebteste Artikel auf der Website ist der {product}, aber nicht für lange!",
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
    aboutUs: {
      firstParagraph: "En savoir plus @.lower:routes.about{'.'}",
      secondParagraph:
        'Il s’agit d’une application e-commerce simple réalisée avec Vue.js et Vite. Il utilise l’"fakestoreapi" pour obtenir les produits et la bibliothèque "vue-i18n" pour traduire l’application.',
      popularItem:
        "L'article le plus populaire sur le site est le {product}, mais pas pour longtemps!",
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
