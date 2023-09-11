<template>
  <div id="app">
    <HelloWorld msg="Welcome! New Calc! (again!)" />
    <hr />
    <br />
    <br />
    <br />
    <CalcFunc />
    <br />
    <br />
    <br />
    <hr />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CalcFunc from "./components/CalcFunc.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CalcFunc,
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
