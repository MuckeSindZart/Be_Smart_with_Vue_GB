<template>
  <div>
    <div v-for="(item, index) in cartItems" :key="index">
      <input type="number" v-model="item.quantity" @change="updateTotal" />
      <p>Price: {{ item.price }}</p>
      <p>Subtotal: {{ item.quantity * item.price }}</p>
    </div>
    <div>Total: {{ total }}</div>
  </div>
</template>

<script>
export default {
  name: "SemVueCart",

  data() {
    return {
      cartItems: [
        { quantity: 2, price: 10 },
        { quantity: 2, price: 15 },
      ],
      total: 0,
    };
  },
  methods: {
    updateTotal() {
      this.total = this.cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
    },
  },
  mounted() {
    this.updateTotal();
  },
};
</script>

<!-- <template>
      <div>
        <div v-for="product in products" :key="product.id">
          <input type="number" v-model.number="item.quantity" />
    
          <input :v-bind="count" type="number" />
          <p>Price: {{ product.price }}</p>
          <p>Total:{{ product.price * count }}</p>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: "SemVueCart",
    
      data() {
        return {
          count: 0,
          products: {
            product1: { name: "C", price: "123" },
            product2: { name: "C", price: "123" },
          },
        };
      },
    
      methods: {},
    };
    </script>
    
    <style lang="scss" scoped></style> -->
