<template>
  <the-navigation></the-navigation>
  <teleport to="body">
    <the-cart></the-cart>
  </teleport>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import TheCart from "@/components/TheCart.vue";
export default {
  components: {
    TheNavigation,
    TheCart
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  margin: 30px 20%;
  padding: 2%;
}
</style>
