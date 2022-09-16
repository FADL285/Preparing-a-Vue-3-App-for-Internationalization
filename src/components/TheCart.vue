<template>
  <div class="cart">
    <div class="cartButton" @click="toggleCart">
      Cart
      <span :class="['total', { totalChanged: itemAddedAnimation }]">{{
        numOfItemsInCart
      }}</span>
    </div>
    <div class="cartItems" :style="{ display: cartVisible ? 'block' : 'none' }">
      <h3 class="col">Subtotal: ${{ subtotalFormatted }}</h3>
      <div class="col" v-for="item in itemsInCart" :key="item.id">
        <div class="item">
          <h3>{{ item.title }}</h3>
          <p>${{ formatPrice(item.subtotal) }}</p>
          <p class="itemQuantity">
            <button @click="addItemToCart(item.id)">+</button>
            <span>{{ item.quantity }}</span>
            <button @click="removeItemFromCart(item.id)">-</button>
          </p>
          <button class="clearButton" @click="clearItemFromCart(item.id)">
            Remove this item
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      cartVisible: false,
      itemAddedAnimation: false,
    };
  },
  computed: {
    ...mapGetters(["itemsInCart", "numOfItemsInCart", "subtotalFormatted"]),
  },
  methods: {
    ...mapActions(["addItemToCart", "removeItemFromCart", "clearItemFromCart"]),
    toggleCart() { 
      if (this.numOfItemsInCart > 0) {
        this.cartVisible = !this.cartVisible;
      }
    },
    formatPrice(price) {
      return price.toFixed(2);
    },
  },
  watch: {
    numOfItemsInCart(itemsNum) {
      if (itemsNum === 0) {
        this.cartVisible = false;
      }
      this.itemAddedAnimation = true;
      setTimeout(() => {
        this.itemAddedAnimation = false;
      }, 200);
    },
  },
};
</script>

<style scoped>
.cart {
  position: fixed;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 90%);
  color: white;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  font-size: 18px;
  max-height: 800px;
  overflow-y: auto;
}
.cartButton {
  float: right;
  margin: 20px;
}

.cartButton:hover {
  cursor: pointer;
}

.cartItems {
  width: 500px;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 18px;
}

.total {
  background-color: white;
  border-radius: 30px;
  padding: 5px 10px;
  margin-left: 5px;
  margin-right: 10px;
  color: black;
  transition: all 0.2s;
}

.totalChanged {
  background-color: red;
}

.col {
  float: left;
  width: 100%;
  padding: 2% 1%;
}

.item {
  box-shadow: 6px 5px 6px 0px rgb(0 0 0 / 20%);
  padding: 16px;
  text-align: center;
  background-color: #f7f7f7;
  height: 14rem;
  color: black;
}

.itemQuantity button {
  background-color: #000000;
  border: none;
  color: white;
  padding: 5px 20px;
  height: 45px;
  width: 60px;
  text-decoration: none;
  font-size: 25px;
  cursor: pointer;
  border-radius: 6px;
}

.itemQuantity span {
  margin: 0 15px;
  font-size: 20px;
}

.clearButton {
  background-color: #fb3535;
  border: none;
  color: white;
  padding: 8px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 6px;
}
</style>
