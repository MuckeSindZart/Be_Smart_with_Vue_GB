<template>
  <div>
    <div class="content">
      <div class="content__item"><h3>ID</h3></div>
      <div class="content__item"><h3>Name</h3></div>
      <div class="content__item"><h3>familienName</h3></div>
      <div class="content__item"><h3>mail</h3></div>
    </div>
    <UserComp v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserComp from "./UserComp.vue";

export default {
  name: "UserList",
  components: {
    UserComp,
  },

  data() {
    return {
      users: [
        {
          id: "1",
          name: "Alex",
          familienName: "Cobalt",
          mail: "Cobalt@mail.com",
        },
        {
          id: "2",
          name: "Felix",
          familienName: "Plumbum",
          mail: "Plumbum@mail.com",
        },
        {
          id: "3",
          name: "Irma",
          familienName: "Iod",
          mail: "Iod@mail.com",
        },
        {
          id: "4",
          name: "Kira",
          familienName: "Ferrum",
          mail: "Ferrum@mail.com",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.content__item {
  padding: 8px 16px;
  border: 1px solid #ccc;
}
</style>
