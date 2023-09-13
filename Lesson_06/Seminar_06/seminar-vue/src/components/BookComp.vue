<template>
  <div @click="showInfo(book)">
    <div class="content__item">{{ book.id }}</div>
    <h4 class="content__item">{{ book.name }}</h4>

    <h4 v-if="book.showInfo" class="content__item">{{ book.author }}</h4>
    <div v-if="book.showInfo" class="content__item">{{ book.info }}</div>
  </div>
</template>

<script>
export default {
  name: "BookComp",
  props: {
    book: {
      type: Object,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    showInfo(book) {
      this.$emit("showInfo", book);
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
