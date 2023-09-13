<template>
  <div class="content">
    <BookComp
      @showInfo="showInfo"
      v-for="book in books"
      :key="book.id"
      :book="book"
    />
  </div>
</template>

<script>
import BookComp from "./BookComp.vue";

export default {
  name: "BookList",
  components: {
    BookComp,
  },

  data() {
    return {
      books: [
        {
          id: "1",
          author: "Alex Cobalt",
          name: "Lazy cooking in 2023",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. Sed.",
          showInfo: false,
        },
        {
          id: "2",
          author: "Felix Plumbum",
          name: "Sleep fo Dummies",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. Sed.",
          showInfo: false,
        },
        {
          id: "3",
          author: "Irma Iod",
          name: "Best Solution 2023",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. Sed.",
          showInfo: true,
        },
        {
          id: "4",
          author: "Kara Ferrum",
          name: "How to Rest in 2023",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. Sed.",
          showInfo: false,
        },
      ],
    };
  },

  mounted() {},

  methods: {
    showInfo(book) {
      book.showInfo = !book.showInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
</style>
