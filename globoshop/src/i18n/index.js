import { createI18n } from "vue-i18n";

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
    },
  },
  de: {
    currency: {
      style: "currency",
      currency: "EUR",
      currencyDisplay: "name",
    },
  },
  fr: {
    currency: {
      style: "currency",
      currency: "EUR",
      currencyDisplay: "symbol",
    },
  },
  ar: {
    currency: {
      style: "currency",
      currency: "EGP",
      currencyDisplay: "symbol",
    },
  },
};

const messages = {
  en: {
    routes: {
      products: "Product",
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
      products: "Produkte",
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
      products: "Des produits",
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
  ar: {
    routes: {
      products: "المنتجات",
      about: "معلومات عنا",
    },
    cart: {
      cart: "عربة التسوق",
      empty: "عربة التسوق فارغة",
      subtotal: "المجموع الفرعي",
      clearButton: "إزالة هذا العنصر",
    },
    aboutUs: {
      firstParagraph: "تعرف على المزيد @.lower:routes.about{'.'}",
      secondParagraph: `هذا تطبيق تجارة إلكترونية بسيط تم إنشاؤه بواسطة Vue.js و Vite. يستخدم "fakestoreapi" للحصول على المنتجات ومكتبة "vue-i18n" لترجمة التطبيق.`,
      popularItem: `العنصر الأكثر شعبية على الموقع هو {product} ، لكن ليس لفترة طويلة!`,
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
  numberFormats,
});
