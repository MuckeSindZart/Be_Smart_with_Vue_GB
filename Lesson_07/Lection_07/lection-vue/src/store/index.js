import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // начальное состояние
    paymentList: [],
  },

  //

  mutations: {
    //   методы для изменения состояния
    SET_PAYMENT(state, payments) {
      state.paymentList = payments;
    },
    ADD_PAYMENTS(state, pay) {
      state.paymentList.push(pay);
    },
  },

  //

  actions: {
    //   методы для асинхронных операций
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentList = [
          {
            date: "28.03.2020",
            category: "Food",
            value: 169,
          },
          {
            date: "24.03.2020",
            category: "Transport",
            value: 360,
          },
          {
            date: "24.03.2020",
            category: "Food",
            value: 532,
          },
        ];
        commit("SET_PAYMENT", paymentList);
      }, 1000);
    },
  },

  //

  getters: {
    //   методы для чтения состояния
    getPayment: (state) => state.paymentList,
    getFullValue: (state) => {
      return state.paymentList.reduce((a, b) => a + Number(b.value), 0);
    },
  },

  //

  modules: {
    //   модули Vuex для разделения хранилища на под-хранилища
  },
});
