<template>
  <div class="col" v-for="item in items" :key="item.id">
    <div class="item">
      <h3>{{ item.title }}</h3>
      <!-- <p>{{ n(item.price, "currency") }}</p> -->
      <i18n-n tag="p" :value="item.price" format="currency">
        <template #currency="{ currency }">
          <span class="currency" style="color: blue; font-size: 1.2rem">
            {{ currency }}
          </span>
        </template>
        <template #integer="slotProps">
          <span style="font-weight: bold; font-size: 1.3rem">{{
            slotProps.integer
          }}</span>
        </template>
        <template #group="{ group }">
          <span class="group-test" style="font-weight: bold">
            {{ group }}
          </span>
        </template>
        <template #decimal="{ decimal }">
          <span class="decimal" style="font-weight: bold; color: green">{{
            decimal
          }}</span>
        </template>
        <template #fraction="{ fraction }">
          <span class="fraction" style="font-weight: bold; color: red">
            {{ fraction }}
          </span>
        </template>
      </i18n-n>
      <p class="description">{{ truncateDescription(item.description, 70) }}</p>
      <p>{{ t("items.posted") }}: {{ d(item.date, "long") }}</p>
      <button @click="addItemToCart(item.id)">
        {{ t("items.addToCart") }}
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { d, t } = useI18n();
    const store = useStore();

    const items = computed(() => store.getters.items);

    const addItemToCart = (itemId) => store.dispatch("addItemToCart", itemId);

    const truncateDescription = (desc, limit) =>
      desc.length > limit ? desc.slice(0, limit) + "..." : desc;

    return {
      items,
      addItemToCart,
      truncateDescription,
      d,
      t,
    };
  },
};
</script>

<style scoped>
.col {
  float: left;
  width: 47%;
  padding: 2% 1%;
}

@media screen and (max-width: 1180px) {
  .col {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.item {
  box-shadow: 6px 5px 6px 0px rgb(0 0 0 / 20%);
  padding: 16px;
  text-align: center;
  background-color: #f7f7f7;
  overflow: hidden;
}

.item button {
  background-color: #2e74ab;
  border: none;
  color: white;
  padding: 8px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 9px #999;
  outline: none;
  user-select: none;
}

.item button:hover {
  background-color: #5d98c5;
}

.item button:active {
  background-color: #5d98c5;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.item .description {
  min-height: 38px;
}
</style>
