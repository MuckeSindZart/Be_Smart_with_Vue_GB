Vue.component("new-comp", {
  props: ["title", "text"],
  data() {
    return {
      // title: "Title",
    };
  },

  template: `<div>
            <hr>
              <h1>{{title}}</h1>
              <h3>{{text}}</h3>
              <p>Вот так вот</p>
            </div>`,
});

//
const componentItem = {
  name: "comp-item",
  template: `<p>Вот text</p>`,
};
//

Vue.component("standart-comp", {
  // props: ["counter"],
  props: ["step"],
  components: {
    comp: componentItem,
  },

  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase(step) {
      this.counter += step;
    },
  },

  template: `<div>
  <comp></comp>
            <button @click="increase(step)"> click +{{step}} </button> 
            <span>: {{ counter }}</span>
            </div>`,
});

Vue.component("change-one", {
  template: `    <div>          <h3>Change1</h3>
  </div>`,
});

Vue.component("change-two", {
  template: `  <ul><li>1</li><li>2</li>
  </ul>`,
});

Vue.component("change-tree", {
  template: `  <div>          <h3>Change3</h3>
  <p>text text</p>
  </div>`,
});
