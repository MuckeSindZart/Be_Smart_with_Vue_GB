<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="INCREMENT">INCREMENT</button>
    <button @click="DECREMENT">DECREMENT</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SeminarVueCountComp",

  //   computed: {
  //     counter() {
  //       return this.$store.getters.getCounter;
  //     },
  //   },
  //   methods: {
  //     increment() {
  //       this.$store.dispatch("increment");
  //     },
  //     decrement() {
  //       this.$store.dispatch("decrement");
  //     },
  //   },

  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["INCREMENT", "DECREMENT"]),
  },
};
</script>

<style lang="scss" scoped></style>
