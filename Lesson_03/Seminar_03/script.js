// -------------------- task2 --------------------//

Vue.component("click-counter", {
  props: ["step"],

  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increase(step) {
      this.counter += step;
    },
    decrease(step) {
      this.counter -= step;
    },
  },

  template: `<div>
            <button @click="increase(step)"> click +{{step}} </button> 
            <button @click="decrease(step)"> click -{{step}} </button> 
            <span>: {{ counter }}</span>
            </div>`,
});

// -------------------- task2 --------------------//

Vue.component("element-list", {
  data() {
    return {
      itemList: [],
      newItemText: "", // Добавляем пустую строку по умолчанию
    };
  },
  methods: {
    addItem() {
      let newItem = {
        id: Date.now(),
        title: this.newItemText,
      };

      if (newItem.title.trim() === "") {
        newItem.title = "Новый элемент списка";
      }
      this.itemList.push(newItem);
      this.newItemText = ""; // Очищаем поле ввода после добавления
    },

    removeItem(id) {
      this.itemList = this.itemList.filter((item) => item.id !== id);
    },
    clearList() {
      this.itemList = [];
    },
  },

  template: `<div>
            <input v-model="newItemText" type="text" placeholder="Введите текст"  @keyup.enter="addItem" />
            <button @click="addItem">Добавить</button>
            <button @click="clearList">Удалить все</button>
            <!-- <ul>
              <li v-for="item in itemList">
              {{ item.title }}
                <button @click="removeItem(item.id)">Удалить</button>
              </li>
                    -->
              <list-item
                  v-for="item in itemList"
                  :item-data="item"
                  @removeItem="removeItem"
                  :key="item.id"
              ></list-item>
            </ul>
            </div>`,
});

Vue.component("list-item", {
  props: ["itemData"],

  methods: {
    removeItem(id) {
      this.$emit("removeItem", id);
    },
  },

  template: `<ul>
                <li>
                    {{ itemData.title }}
                    <button @click="removeItem(itemData.id)">Удалить</button>
                    id{{itemData.id}}
                </li>
            </ul>`,
});

// -------------------- task2 --------------------//

Vue.component("filter-lists", {
  data() {
    return {
      itemList: [
        "item 1",
        "item 3",
        "item 4",
        "item 2",
        "item 11",
        "item 12",
        "item 13",
        "item 14",
        "item 21",
        "item 22",
        "item 23",
        "item 34",
      ],
      textFilter: "", // Добавляем пустую строку по умолчанию
    };
  },
  computed: {
    filterList() {
      return this.itemList.filter((item) => item.includes(this.textFilter));
    },
  },

  template: `<div>
  <input v-model="textFilter" type="text" placeholder="Введите текст фильтра"/>
  <ul>
    <li v-for="(item, index) in filterList" :key="index">
      {{ item }}
    </li>
  </ul>
  </div>`,
});

// -------------------- task4 --------------------//

Vue.component("product-lists", {
  data() {
    return {
      products: [
        {id: 1, name: "Товар 1", price: 500},
        {id: 2, name: "Товар 2", price: 300},
        {id: 3, name: "Товар 3", price: 700},
        {id: 4, name: "Товар 4", price: 200},
        {id: 5, name: "Товар 5", price: 900},
        {id: 6, name: "Чай", price: 400},
        {id: 7, name: "Стол", price: 600},
        {id: 8, name: "Стул", price: 750},
        {id: 9, name: "Пряник", price: 250},
        {id: 10, name: "Самовар", price: 505},
      ],
      sortOrder: {field: "id", ascending: true},
    };
  },

  computed: {
    sortedProducts() {
      const sortFunction = (a, b) => {
        if (this.sortOrder.field === "price") {
          return (this.sortOrder.ascending ? 1 : -1) * (a.price - b.price);
        } else if (this.sortOrder.field === "name") {
          return (this.sortOrder.ascending ? 1 : -1) * a.name.localeCompare(b.name);
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
  template: `<div>
              <table>
              <thead>
                <caption style="font-weight: bold">
                  Product List
                </caption>
                <tr>
                  <th>
                    <a href="#" @click="setSortOrder('id')">
                      <span>
                        ID {{ sortOrder.field === 'id' ? (sortOrder.ascending ? '▲' : '▼') : '' }}
                      </span>
                    </a>
                  </th>
                  <th>
                    <a href="#" @click="setSortOrder('name')">
                      <span>
                        Имя {{ sortOrder.field === 'name' ? (sortOrder.ascending ? '▲' : '▼') : '' }}
                      </span>
                    </a>
                  </th>
                  <th>
                    <a href="#" @click="setSortOrder('price')">
                      <span>
                        Цена {{ sortOrder.field === 'price' ? (sortOrder.ascending ? '▲' : '▼') : '' }}
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
        </div>`,
});
