import { createRouter, createWebHistory, RouterView } from "vue-router";
import Items from "@/views/Items.vue";
import About from "@/views/About.vue";
import i18n, { DEFAULT_LOCALE, AVAILABLE_LOCALES } from "@/i18n";
import { getDefaultLocale, loadLocaleMessages, setHtmlLang } from "@/i18n/helpers";

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
    beforeEnter: async (to) => {
      const paramLocale = to.params.locale;
      if (!paramLocale && getDefaultLocale() === DEFAULT_LOCALE) return true;
      if (!AVAILABLE_LOCALES.includes(paramLocale))
        return { path: getDefaultLocale() };

      await loadLocaleMessages(i18n.global, paramLocale);

      if (i18n.global.locale.value !== paramLocale) {
        i18n.global.locale.value = paramLocale;
        setHtmlLang(paramLocale);
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
