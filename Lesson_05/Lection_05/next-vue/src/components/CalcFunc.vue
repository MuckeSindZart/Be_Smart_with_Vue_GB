<template>
  <div>
    <input type="text" v-model="operand1" />
    <input type="text" v-model="operand2" />
    <span> = </span>
    {{ result }}
    <div v-show="error">Ошибка! {{ error }}</div>

    <div class="keyboard">
      <button
        v-for="operation in operations"
        v-bind:key="operation.id"
        @click="calcAllResult(operation)"
      >
        {{ operation }}
      </button>
    </div>

    <!-- <div>
      <button @click="calcAllResult('+')">+</button>
      <button @click="calcAllResult('-')">-</button>
      <button @click="calcAllResult('*')">*</button>
      <button @click="calcAllResult('/')">/</button>
    </div> -->

    <div>
      <template v-if="result < 0"> Отрицательное </template>
      <template v-if="result > 0 && result <= 100">
        Положительное до 100
      </template>
      <template v-if="result > 100"> Положительное больше чем 100 </template>
      <template v-if="result === 0"> Похоже ноль</template>
    </div>
    <div>
      <h4>Число Фибоначчи для 1 числа : {{ fibb1 }}</h4>
      <h4>Число Фибоначчи для 1 числа : {{ fibb2 }}</h4>
    </div>

    <div class="logs">
      <h4>История</h4>
      <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcFunc",

  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      operations: ["+", "-", "*", "/", "+", "-", "*", "/"],
      error: "",
      logs: {},
    };
  },

  methods: {
    add() {
      this.result = Number(this.operand1) + Number(this.operand2);
    },
    minus() {
      this.result = Number(this.operand1) - Number(this.operand2);
    },
    multi() {
      this.result = Number(this.operand1) * Number(this.operand2);
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = operand1 / operand2;
      }
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
    calcAllResult(operation = "+") {
      this.error = "";

      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.minus();
          break;
        case "*":
          this.multi();
          break;
        case "/":
          this.div();
          break;

        // default:
        //   break;
      }
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      Vue.set(this.logs, key, value);
      console.log(JSON.stringify(this.logs));
    },
  },

  computed: {
    fibb1() {
      return this.fib(this.operand1);
    },
    fibb2() {
      return this.fib(this.operand2);
    },
  },
};
import Vue from "vue";
</script>

<style lang="scss" scoped></style>
