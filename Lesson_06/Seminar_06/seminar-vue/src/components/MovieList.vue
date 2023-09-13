<template>
  <div>
    <div v-if="selectedMovie" class="content__item">
      {{ selectedMovie.name }}
      {{ selectedMovie.info }}
    </div>
    <div class="content">
      <MovieInfo
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @showInfo="showInfo"
      />
    </div>
  </div>
</template>

<script>
import MovieInfo from "./MovieInfo.vue";

export default {
  name: "MovieList",
  components: {
    MovieInfo,
  },

  data() {
    return {
      currentIndex: null,
      movies: [
        {
          id: "1",
          author: "Alex Cobalt",
          name: "Vampire 1938",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. 1938.",
        },
        {
          id: "2",
          author: "Felix Plumbum",
          name: "Zombie Night 1992",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. 1992.",
        },
        {
          id: "3",
          author: "Irma Iod",
          name: "Love In Work 2001",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. 2001.",
        },
        {
          id: "4",
          author: "Kara Ferrum",
          name: "Hard Explodes 1990",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ut lectus nec viverra. 1990.",
        },
      ],
    };
  },

  computed: {
    selectedMovie() {
      if (this.currentIndex) {
        console.log(`Id - ${this.currentIndex}`);
        console.log(this.movies[this.currentIndex]);
        return this.movies[this.currentIndex - 1];
      }
      return this.currentIndex;
    },
  },

  methods: {
    showInfo(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
</style>
