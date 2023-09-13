<template>
  <div>
    <div class="content">
      <div class="content__item">{{ user.id }}</div>
      <div class="content__item">{{ user.name }}</div>
      <div class="content__item">{{ user.familienName }}</div>
      <div class="content__item">{{ user.mail }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComp",
  props: {
    user: {
      type: Object,
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.content__item {
  padding: 8px 16px;
  border: 1px solid #ccc;
}
</style>
