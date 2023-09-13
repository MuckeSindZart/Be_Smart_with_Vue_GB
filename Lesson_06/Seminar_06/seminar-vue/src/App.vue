<template>
  <div id="app">
    <HelloWorld msg="Welcome !" />
    <hr />
    <h3>UserList</h3>
    <UserList />
    <hr />
    <h3>Try Click</h3>
    <BookList />
    <hr />
    <h3>Movie More Info Click</h3>
    <MovieList />
  </div>
</template>

<script>
import BookList from "./components/BookList.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MovieList from "./components/MovieList.vue";
import UserList from "./components/UserList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    UserList,
    BookList,
    MovieList,
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
h3 {
  margin-bottom: 0;
}
</style>
