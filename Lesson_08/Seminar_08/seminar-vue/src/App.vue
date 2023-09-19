<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Main</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contacts">Contacts</router-link> |
        <router-link to="/catalog">Catalog</router-link>
      </nav>
    </header>
    <main>
      <HelloWorld msg="Welcome !" />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
