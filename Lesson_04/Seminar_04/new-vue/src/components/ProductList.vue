<template>
  <div>
    <table>
      <caption style="font-weight: bold">
        Product List
      </caption>
      <thead>
        <tr>
          <th>
            <a href="#" @click="setSortOrder('id')">
              <span>
                ID
                {{
                  sortOrder.field === "id"
                    ? sortOrder.ascending
                      ? "▲"
                      : "▼"
                    : ""
                }}
              </span>
            </a>
          </th>
          <th>
            <a href="#" @click="setSortOrder('name')">
              <span>
                Имя
                {{
                  sortOrder.field === "name"
                    ? sortOrder.ascending
                      ? "▲"
                      : "▼"
                    : ""
                }}
              </span>
            </a>
          </th>
          <th>
            <a href="#" @click="setSortOrder('price')">
              <span>
                Цена
                {{
                  sortOrder.field === "price"
                    ? sortOrder.ascending
                      ? "▲"
                      : "▼"
                    : ""
                }}
              </span>
            </a>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in sortedProducts" :key="product.id">
          <td class="id">{{ product.id }}</td>
          <td class="name">{{ product.name }}</td>
          <td class="price">{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductList",

  data() {
    return {
      products: [
        { id: 1, name: "Товар 1", price: 500 },
        { id: 2, name: "Товар 2", price: 300 },
        { id: 3, name: "Товар 3", price: 700 },
        { id: 4, name: "Товар 4", price: 200 },
        { id: 5, name: "Товар 5", price: 900 },
        { id: 6, name: "Чай", price: 400 },
        { id: 7, name: "Стол", price: 600 },
        { id: 8, name: "Стул", price: 750 },
        { id: 9, name: "Пряник", price: 250 },
        { id: 10, name: "Самовар", price: 505 },
      ],
      sortOrder: { field: "id", ascending: true },
    };
  },
  computed: {
    sortedProducts() {
      const sortFunction = (a, b) => {
        if (this.sortOrder.field === "price") {
          return (this.sortOrder.ascending ? 1 : -1) * (a.price - b.price);
        } else if (this.sortOrder.field === "name") {
          return (
            (this.sortOrder.ascending ? 1 : -1) * a.name.localeCompare(b.name)
          );
        } else if (this.sortOrder.field === "id") {
          return (this.sortOrder.ascending ? 1 : -1) * (a.id - b.id);
        }
      };
      return [...this.products].sort(sortFunction);
    },
  },
  methods: {
    setSortOrder(field) {
      if (this.sortOrder.field === field) {
        this.sortOrder.ascending = !this.sortOrder.ascending;
      } else {
        this.sortOrder.field = field;
        this.sortOrder.ascending = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
}
td.id {
  width: 50px;
  text-align: center;
}
td.name {
  width: 100px;
  text-align: center;
}
td.price {
  width: 100px;
}

th {
  background-color: #f2f2f2;
}
</style>
