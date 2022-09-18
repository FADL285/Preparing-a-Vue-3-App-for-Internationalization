<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { AVAILABLE_LOCALES } from "@/i18n";
import { loadLocaleMessages } from "@/i18n/helpers";

const router = useRouter();
const i18n = useI18n();
const { locale } = i18n;

const changeLocale = async ({ target: { value } }) => {
  const newLocale = value;
  await loadLocaleMessages(i18n, newLocale);
  locale.value = newLocale;
  router.replace({ params: { locale: newLocale } }).catch(() => {
    router.push("/");
  });

  localStorage.setItem("locale", newLocale);
};
</script>

<template>
  <select @change="changeLocale">
    <option
      v-for="lang in AVAILABLE_LOCALES"
      :key="`locale-${lang}`"
      :value="lang"
      :selected="lang === locale"
    >
      {{ lang }}
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
