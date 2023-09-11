<template>
  <div id="app">
    <HelloWorld msg="Welcome !" />
    <hr />
    <Autorisation />
    <hr />
    <Cart />
    <hr />
    <test :product="productData" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Autorisation from "./components/Autorisation.vue";
import Cart from "./components/Cart.vue";
import test from "./components/test.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Autorisation,
    Cart,
    test,
  },
  data() {
    return {
      productData: {
        name: "Super Ice Cool Blue Oval Lite",
        price: 99.99,
        available: true,
        // Добавьте другие свойства, если необходимо
      },
    };
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
