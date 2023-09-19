<template>
  <section>
    <h3 :class="headerClass">Корзина покупок</h3>
    <div class="wrapper">
      <div>
        <div v-for="item in cartItems" :key="item.id">
          <h4 :style="someStyle">{{ item.name }}</h4>
          <p>Кол-во: {{ item.quantity }}</p>
          <p>Стоимость: {{ item.quantity * item.price }}</p>
        </div>
      </div>
      <div>
        <p>кол-во: {{ totalItems }}</p>
        <p>стоимость: {{ totalPrice }}</p>
        <button @click="addRandomItem">Добавить товар</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartItems",
  props: ["type"], // любое необходимое значение
  computed: {
    ...mapGetters(["totalItems", "totalPrice", "cartItems"]),
    headerClass() {
      if (this.type === "footer") {
        return ["footerClas1", "footerClas2"];
      } else {
        return ["headerClass1", "headerClass2"];
      }
    },
    someStyle() {
      return {
        backgroundColor: "cyan",
        fontSize: "12px",
        // .....
      };
    },
  },
  methods: {
    ...mapActions(["addToCart", "getCart"]),
    addRandomItem() {
      const newItem = {
        id: Date.now(),
        name: "Товар " + Date.now(),
        price: 123,
      };

      this.addToCart(newItem);
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 75vw;
  grid-template-columns: repeat(2, 1fr);
}
</style>
