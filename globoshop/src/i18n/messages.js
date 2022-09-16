export default {
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
  de: ,
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