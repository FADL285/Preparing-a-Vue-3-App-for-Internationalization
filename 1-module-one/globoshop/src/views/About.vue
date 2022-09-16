<template>
  <div class="about">
    <h1>{{ $t("routes.about") }}</h1>
    <p>{{ $t("aboutUs.firstParagraph") }}</p>
    <p>
      {{ $t("aboutUs.secondParagraph") }}
    </p>
    <p>
      {{
        $t("aboutUs.popularItem", { product: $store.getters.items[0].title })
      }}
    </p>
  </div>
</template>
