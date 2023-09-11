<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ formattedPrice }}</p>
    <p>{{ product.available ? "Available" : "Out of stock" }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      return this.product.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD", // Валюта по выбору
      });
    },
  },
};
</script>
