export default {
  items(state) {
    return state.items;
  },
  itemsInCart(state) {
    return state.itemsInCart;
  },
  numOfItemsInCart(state) {
    return state.numOfItemsInCart;
  },
  subtotal(state) {
    return state.subtotal;
  },
  subtotalFormatted(state) {
    return state.subtotal.toFixed(2);
  }
};
