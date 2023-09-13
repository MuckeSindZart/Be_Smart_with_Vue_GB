<template>
  <div>
    <div class="content">
      <input
        class="content__item"
        type="text"
        v-model="category"
        placeholder="category"
      />
      <input
        class="content__item"
        type="text"
        v-model="value"
        placeholder="value"
      />
      <input
        class="content__item"
        type="text"
        v-model="date"
        placeholder="data"
      />
      <button class="saveButton content__item" @click="OnSave">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddList",

  data() {
    return {
      category: "",
      value: "",
      date: "",
    };
  },

  mounted() {},
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },

  methods: {
    OnSave() {
      const data = {
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPay", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 15px 0;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 75vw;
  grid-template-columns: repeat(3, 1fr);
}
.content__item {
  padding: 8px 16px;
}
.saveButton {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
}
</style>
