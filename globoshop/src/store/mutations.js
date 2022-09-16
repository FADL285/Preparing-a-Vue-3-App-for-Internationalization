export default {
  addItemToCart(state, itemId) {
    const item = state.items.find(
      it => it.id === itemId
    );
    const itemIndex = state.itemsInCart.findIndex(
      it => it.id === itemId
    );

    if (itemIndex < 0) {
      state.itemsInCart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
        subtotal: item.price
      });
    } else {
      state.itemsInCart[itemIndex].quantity++;
      state.itemsInCart[itemIndex].subtotal +=
        item.price;
    }
    state.numOfItemsInCart++;
    state.subtotal += item.price;
  },
  removeItemFromCart(state, itemId) {
    const itemIndex = state.itemsInCart.findIndex(
      it => it.id === itemId
    );

    state.numOfItemsInCart--;
    state.subtotal -=
      state.itemsInCart[itemIndex].price;
    if (
      state.itemsInCart[itemIndex].quantity > 1
    ) {
      state.itemsInCart[itemIndex].quantity--;
      state.itemsInCart[itemIndex].subtotal -=
        state.itemsInCart[itemIndex].price;
    } else {
      state.itemsInCart.splice(itemIndex, 1);
    }
  },
  clearItemFromCart(state, itemId) {
    const itemIndex = state.itemsInCart.findIndex(
      it => it.id === itemId
    );
    const itemQuantity =
      state.itemsInCart[itemIndex].quantity;
    const itemPrice =
      state.itemsInCart[itemIndex].price;

    state.numOfItemsInCart -= itemQuantity;
    state.subtotal -= itemQuantity * itemPrice;
    state.itemsInCart.splice(itemIndex, 1);
  }
};
