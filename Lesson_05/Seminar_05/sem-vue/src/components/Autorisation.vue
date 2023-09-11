<template>
  <div>
    <form v-if="!accept" @submit="tryIn">
      <h4>Ведите Пароль:</h4>
      <input v-model="logInput" type="text" placeholder="Login" />
      <br />
      <input v-model="passInput" type="text" placeholder="Password" />
      <br />
      <button @click="tryIn(passInput, logInput)">Ввод</button>
    </form>
    <div v-if="accept">
      <p>Welcome User</p>
      <button @click="logOut">Выход</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueAutorisation",

  data() {
    return {
      usr: { pass: "123", login: "usr" },
      passInput: "",
      logInput: "",

      accept: false,
    };
  },

  mounted() {},

  methods: {
    tryIn(passInput, logInput) {
      if (passInput === this.usr.pass && logInput == this.usr.login) {
        this.accept = true;
      }
      this.passInput = "";
      this.logInput = "";
    },
    logOut() {
      this.accept = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
