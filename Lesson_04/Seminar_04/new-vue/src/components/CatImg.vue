<template>
  <div>
    <h3>Cat Gallery</h3>
    <div>
      <img class="bigImg" :src="selectedImg" alt="pic" />
    </div>
    <div>
      <img
        class="smallImg"
        v-for="(img, index) in imgs"
        :key="index"
        :src="img"
        alt="cat"
        @click="clickImg(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CatImg",

  data() {
    return {
      currentImgIndex: 0,
      imgs: [
        "https://dobrovserdce.ru/images/2022/11/02/kot%20Fedya_large.jpeg",
        "https://cdnn1.ukraina.ru/img/07e6/0c/02/1041436899_0:206:2905:1840_1920x0_80_0_0_c7022893b761781d76fe592010d14bd2.jpg",
        "https://doctor-veterinar.ru/media/k2/items/cache/675d28c04794e3c683f4419536c4c15f_L.jpg",
      ],
    };
  },

  mounted() {},
  methods: {
    clickImg(index) {
      this.currentImgIndex = index;
    },
  },

  computed: {
    selectedImg() {
      return this.imgs[this.currentImgIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.bigImg {
  height: 300px;
}
.smallImg {
  height: 150px;
}
</style>
