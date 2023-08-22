var app = new Vue({
  el: "#app",
  data: {
    message: "Привет, Vue!",
    counter: 0,
    x: 0,
    y: 0,
    bigText: `big text <span>New text <a href ="#">info</a> </span>`,
    productInCart: false,
  },
  methods: {
    sayHello(newMessage) {
      //   alert("PukiPuk");
      this.message = newMessage;
      return this.message;
    },

    changeText() {
      this.message = "NewNewPukPuk";
    },
    Increase(step, event) {
      this.counter += step;
      console.log(event);
    },

    mouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
});
