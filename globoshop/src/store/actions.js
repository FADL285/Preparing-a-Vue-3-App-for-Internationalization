export default {
  addItemToCart({ commit }, itemId) {
    commit("addItemToCart", itemId);
  },
  removeItemFromCart({ commit }, itemId) {
    commit("removeItemFromCart", itemId);
  },
  clearItemFromCart({ commit }, itemId) {
    commit("clearItemFromCart", itemId);
  }
};
