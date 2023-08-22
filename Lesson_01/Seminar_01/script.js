//task1
const task1 = new Vue({
  el: "#task1",
  data: {
    productCounter: 0,
    buttons: [
      {id: 1, text: "Buy", inCart: false},
      {id: 2, text: "Buy", inCart: false},
      {id: 3, text: "Buy", inCart: false},
      {id: 4, text: "Buy", inCart: false},
    ],
  },
  methods: {
    onClickCounterProduct(button) {
      if (!button.inCart) {
        this.productCounter++;
        button.inCart = true;
        button.text = "Del";
      } else {
        this.productCounter--;
        button.inCart = false;
        button.text = "Buy";
      }
    },
  },
});

// task2

const task2 = new Vue({
  el: "#task2",
  data: {
    text: "How old are you?",
    access: false,
    buttons: [
      {id: 1, buttonText: "Старше 14", newText: "Можно Заказать Товар", access: true},
      {id: 2, buttonText: "Младше 14", newText: "Нужно подрасти", access: false},
    ],
    v2buttons: [
      {id: 3, buttonText: "Старше 14", newText: "Можно Заказать Товар", access: true},
      {id: 4, buttonText: "Младше 14", newText: "Нужно подрасти", access: false},
    ],
  },
  methods: {
    ageQuest(button) {
      this.text = button.newText;
      return this.button.newText;
    },
    ageAnswer(button) {
      this.access = button.access;
      return this.access;
    },
  },
});

// task3

const task3 = new Vue({
  el: "#task3",
  data: {
    visible: false,
  },
});

// task4

const task4 = new Vue({
  el: "#task4",
  data: {
    number: 0,
  },
  computed: {
    text() {
      if (this.number < 5) {
        return "  x<5";
      } else if (this.number >= 5 && this.number <= 9) {
        return "  5>x<9";
      } else {
        return "  x=10";
      }
    },
  },
  methods: {
    randNumb() {
      this.number = Math.floor(Math.random() * 10) + 1;
      return this.number;
    },
  },
});
