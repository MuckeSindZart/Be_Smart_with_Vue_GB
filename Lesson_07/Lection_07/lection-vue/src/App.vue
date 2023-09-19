<template>
  <div id="app">
    <HelloWorld msg="Welcome !" />
    <hr />
    <PaymentDisplay :items="paymentList" />
    <hr />
    <AddList @addNewPay="addNewPay" />
    <hr />
  </div>
</template>

<script>
import AddList from "./components/AddList.vue";
import HelloWorld from "./components/HelloWorld.vue";
import PaymentDisplay from "./components/PaymentDisplay.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
    PaymentDisplay,
    AddList,
  },

  methods: {
    addNewPay(data) {
      this.ADD_PAYMENTS(data);
    },
    ...mapMutations(["SET_PAYMENT", "ADD_PAYMENTS"]),
  },

  computed: {
    ...mapState(["paymentList"]),
    ...mapGetters(["getFullValue", "getPayment"]),
    ...mapActions(["fetchData"]),
  },

  created() {
    this.SET_PAYMENT(this.fetchData());
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
