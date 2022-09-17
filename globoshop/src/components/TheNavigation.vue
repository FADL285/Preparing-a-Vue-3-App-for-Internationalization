<template>
  <div class="nav">
    <h1>GloboShop</h1>

    <router-link :to="{ name: 'items', params: { locale } }">
      {{ t("routes.products") }}
    </router-link>
    <router-link :to="{ name: 'about', params: { locale } }">
      {{ t("routes.about") }}
    </router-link>

    <the-language-picker></the-language-picker>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import TheLanguagePicker from "@/components/TheLanguagePicker.vue";

export default {
  components: {
    TheLanguagePicker,
  },
  setup() {
    const { t, locale } = useI18n();
    const store = useStore();
    const numOfitemsInCart = computed(() => store.state.numOfitemsInCart);

    return {
      numOfitemsInCart,
      t,
      locale,
    };
  },
};
</script>

<style scoped>
.nav {
  overflow: hidden;
  background-color: #1d2063;
  margin: 1% 20%;
  height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 1%;
}

.nav h1 {
  color: white;
  margin: 5% 5%;
  user-select: none;
}

.nav a {
  color: #f2f2f2;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
  margin: 10px;
  white-space: nowrap;
  overflow: hidden;
}

.nav a:hover {
  background-color: #ddd;
  color: black;
  border-radius: 22px;
  transition: background-color 0.3s ease-out 20ms;
}

.nav a.router-link-active {
  background-color: #006bff;
  color: white;
  border-radius: 22px;
}

@media screen and (max-width: 1180px) {
  .nav {
    display: block;
    height: 100%;
    text-align: center;
  }

  .nav a {
    display: block;
  }
}
</style>
