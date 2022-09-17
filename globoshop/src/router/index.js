import { createRouter, createWebHistory, RouterView } from "vue-router";
import Items from "@/views/Items.vue";
import About from "@/views/About.vue";
import i18n from "@/i18n";

const routes = [
  {
    path: "/:locale?",
    component: RouterView,
    children: [
      {
        path: "items",
        name: "items",
        component: Items,
        alias: "",
      },
      {
        path: "about",
        name: "about",
        component: About,
      },
    ],
    beforeEnter: (to) => {
      const paramLocale = to.params.locale;
      if (!i18n.global.availableLocales.includes(paramLocale))
        return { path: i18n.global.locale.value };

      if (i18n.global.locale.value !== paramLocale)
        i18n.global.locale.value = paramLocale;
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
