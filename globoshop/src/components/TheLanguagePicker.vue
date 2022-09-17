<script setup>
import { watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { locale, availableLocales } = useI18n();

watch(locale, (newLocale) => {
  router.replace({ params: { locale: newLocale } }).catch(() => {
    router.push("/");
  });

  localStorage.setItem("locale", newLocale);
});
</script>

<template>
  <select v-model="locale">
    <option
      v-for="locale in availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>
</template>

<style scoped>
select {
  font-size: 1.125rem;
  text-align: center;
  width: 90px;
  height: 35px;
  margin-left: auto;
  margin-right: 1rem;
  outline: none;
}
</style>
