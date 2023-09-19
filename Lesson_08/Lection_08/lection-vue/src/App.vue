<template>
  <div id="app">
    <HelloWorld msg="Welcome !" />
    <header>
      <nav>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/hallo">volks</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  data() {
    return {};
  },
  created() {
    this.$router.push({ name: "dashboard" });
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
nav {
  font-size: 32px;
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}
</style>
