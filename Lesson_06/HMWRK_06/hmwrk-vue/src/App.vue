<template>
  <div id="app">
    <HelloWorld msg="Welcome !" />
    <Project />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Project from "./components/Project.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Project,
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
