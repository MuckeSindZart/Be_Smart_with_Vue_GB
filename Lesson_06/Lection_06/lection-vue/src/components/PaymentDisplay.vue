<template>
  <div>
    <!-- <h4>{{ info }}</h4> -->
    <!-- <div v-for="item in items" :key="item.id">
      {{ item.category }} - {{ item.value }} - {{ item.date }}
    </div> -->
    <div>
      <div v-for="item in items" :key="item.id">
        <div class="content">
          <div class="content__item">{{ item.category }}</div>
          <div class="content__item">{{ item.value }}</div>
          <div class="content__item">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDisplay",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 75vw;
  grid-template-columns: repeat(3, 1fr);
}
.content__item {
  padding: 8px 16px;
  border: 1px solid #ccc;
}
</style>
