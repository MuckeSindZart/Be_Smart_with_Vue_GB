<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloVue textHello="Hi Vue its me Fog" />
    <CatImg />
    <ProductList />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloVue from "./components/HelloVue.vue";
import CatImg from "./components/CatImg.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloVue,
    CatImg,
    ProductList,
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
