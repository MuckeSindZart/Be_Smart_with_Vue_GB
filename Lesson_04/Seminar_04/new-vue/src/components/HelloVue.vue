<template>
  <p class="hello">{{ textHello }}</p>
</template>

<script>
export default {
  name: "HelloVue",
  props: ["textHello"],
};
</script>

<style scoped lang="scss">
.hello {
  color: red;
}
</style>
