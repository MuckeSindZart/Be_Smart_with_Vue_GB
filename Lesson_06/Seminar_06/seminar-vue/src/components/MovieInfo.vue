<template>
  <div @click="showInfo(movie.id)">
    <div class="content__item">{{ movie.id }}</div>
    <h4 class="content__item">{{ movie.name }}</h4>
    <h4 class="content__item">{{ movie.author }}</h4>
  </div>
</template>

<script>
export default {
  name: "MovieInfo",

  props: {
    movie: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },

  mounted() {},

  methods: {
    showInfo(index) {
      this.$emit("showInfo", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.content__item {
  margin: 0;
  padding: 8px 16px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
