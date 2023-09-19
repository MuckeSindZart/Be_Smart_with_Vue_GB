import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // начальное состояние
    counter: 0,
    cartItems: [],
  },

  //

  mutations: {
    //   методы для изменения состояния
    INCREMENT(state) {
      state.counter++;
    },
    DECREMENT(state) {
      state.counter--;
    },
    ADD_ITEM_TO_CART(state, item) {
      const find = state.cartItems.find(
        (stateItem) => stateItem.id === item.id
      );

      if (find) {
        find.quantity++;
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };

        state.cartItems.push(newItem);
      }
    },
    SET_CART(state, cart) {
      state.cartItems = cart;
    },
  },

  //

  actions: {
    //   методы для асинхронных операций
    // increment(context) {
    //   context.commit("INCREMENT");
    // },
    // decrement(context) {
    //   context.commit("DECREMENT");
    // },
    addToCart({ commit }, item) {
      commit("ADD_ITEM_TO_CART", item);
    },
    getCart({ commit }) {
      setTimeout(() => {
        const cart = [
          {
            id: 1,
            name: "Товар 1",
            price: 100,
            quantity: 3,
          },
          {
            id: 2,
            name: "Товар 2",
            price: 50,
            quantity: 2,
          },
          {
            id: 3,
            name: "Товар 3",
            price: 200,
            quantity: 1,
          },
        ];

        commit("SET_CART", cart);
      }, 1500);
    },
  },

  //

  getters: {
    //   методы для чтения состояния
    cartItems(state) {
      return state.cartItems;
    },
    totalPrice(state) {
      return state.cartItems.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );
    },
    totalItems(state) {
      return state.cartItems.reduce(
        (totalQuantity, item) => totalQuantity + item.quantity,
        0
      );
    },
  },

  //

  modules: {
    //   модули Vuex для разделения хранилища на под-хранилища
  },
});
