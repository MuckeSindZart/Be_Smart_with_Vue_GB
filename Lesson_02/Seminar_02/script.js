const task1 = new Vue({
  el: "#task1",
  data: {
    product: {
      name: "hat",
      price: 100,
      discount: 0,
      photo: "image.png",
      hasDiscount: false,
    },
  },
  methods: {
    makeDiscount() {
      if (!this.product.hasDiscount) {
        this.discount = Math.floor(Math.random() * 20);
        this.product.price = this.product.price - (this.product.price * this.discount) / 100;
        this.product.hasDiscount = true;
      }
    },
  },
  computed: {},
});
//----------------------------------------------//

const task2 = new Vue({
  el: "#task2",
  data: {
    users: [
      {
        name: "Ivan",
        age: 20,
      },
      {
        name: "Peter",
        age: 25,
      },
      {
        name: "Elena",
        age: 30,
      },
      {
        name: "Stefan",
        age: 35,
      },
    ],
  },
});
//----------------------------------------------//
const task3 = new Vue({
  el: "#task3",
  data: {
    products: [
      {name: "Молоко", quantity: 2, isBought: false},
      {name: "Хлеб", quantity: 1, isBought: true},
      {name: "Яблоки", quantity: 5, isBought: false},
      {name: "Мясо", quantity: 3, isBought: false},
      {name: "Яйца", quantity: 12, isBought: true},
    ],
  },
});
//----------------------------------------------//
const task4 = new Vue({
  el: "#task4",
  data: {
    firstName: "",
    lastName: "",
    email: "",
    contacts: [],
  },
  methods: {
    addContact() {
      this.contacts.push({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      });
      this.firstName = "";
      this.lastName = "";
      this.email = "";
    },
  },
});
//----------------------------------------------//
