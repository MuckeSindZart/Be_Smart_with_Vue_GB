<template>
  <div>
    <h4>Catalog</h4>
    <div v-for="product in currentProductList" :key="product.id">
      {{ product.id }}{{ product.name }}{{ product.price }}
    </div>
    <router-link
      v-for="page in paginationPage"
      :key="page"
      :to="`/catalog/${page}`"
      >{{ page }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "VueCatalog",
  watch: {
    $route() {
      //   console.log(to, from);
      this.currentPage = this.$route.params.page;
    },
  },
  mounted() {
    // console.log(this.$route.params.page);
    // console.log(this.paginationPage);
  },

  data() {
    return {
      currentPage: 1,
      products: [
        {
          name: "Goods 1",
          price: "25",
          id: 61,
        },
        {
          name: "Goods 2",
          price: "12",
          id: 72,
        },
        {
          name: "Goods 3",
          price: "45",
          id: 883,
        },
        {
          name: "Goods 4",
          price: "54",
          id: 94,
        },
        {
          name: "Goods 5",
          price: "23",
          id: 35,
        },
        {
          name: "Goods 11",
          price: "86",
          id: 11,
        },
        {
          name: "Goods 12",
          price: "112",
          id: 21,
        },
        {
          name: "Goods 13",
          price: "112",
          id: 31,
        },
        {
          name: "Goods 14",
          price: "112",
          id: 14,
        },
        {
          name: "Goods 15",
          price: "112",
          id: 52,
        },
        {
          name: "Goods 141",
          price: "112",
          id: 124,
        },
        {
          name: "Goods 115",
          price: "1112",
          id: 522,
        },
      ],

      itemsPerPage: 5,
    };
  },

  computed: {
    currentProductList() {
      const { currentPage, itemsPerPage } = this;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      return this.products.slice(startIndex, endIndex);
    },
    paginationPage() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
