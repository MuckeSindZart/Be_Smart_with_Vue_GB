<template>
  <div id="app">
    <HelloWorld msg="Welcome !" />
    <hr />
    <!--<hr> 
    <AddCount />
    <AddCount />
    <AddCount /> -->
    <PaymentDisplay :items="paymentList" />
    <hr />
    <AddList @addNewPay="addNewPay" />
    <hr />
  </div>
</template>

<script>
import AddList from "./components/AddList.vue";
import HelloWorld from "./components/HelloWorld.vue";
// import AddCount from "./components/AddCount.vue";
import PaymentDisplay from "./components/PaymentDisplay.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    // AddCount,
    PaymentDisplay,
    AddList,
  },

  data() {
    return {
      paymentList: [],
      newText: "Some Text Info",
    };
  },

  methods: {
    fetchData() {
      return [
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
    },
    addNewPay(data) {
      this.paymentList.push(data);
    },
  },

  created() {
    this.paymentList = this.fetchData();
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
