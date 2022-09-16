import { createStore } from "vuex";

import items from "./data/items.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default createStore({
  state: {
    subtotal: 0,
    numOfItemsInCart: 0,
    itemsInCart: [],
    items
  },
  mutations,
  actions,
  getters
});
