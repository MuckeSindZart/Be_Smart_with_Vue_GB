<template>
  <div id="app">
    <HelloWorld msg="Welcome !" />
    <hr />
    <CountComp />
    <hr />
    <CartItems />
  </div>
</template>

<script>
import CountComp from "./components/CountComp.vue";
import HelloWorld from "./components/HelloWorld.vue";
import CartItems from "./components/CartItems.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CountComp,
    CartItems,
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
body {
  background-color: darkgray;
}
</style>
