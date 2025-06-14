<script setup>
const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['movieClick'])

const handleMovieClick = (movie) => {
  emit('movieClick', movie)
}
</script>

<template lang="pug">
.top-movies
  .container
    .top-movies__header
      h2.top-movies__title Top 10 Movies Today
    .top-movies__row
      .top-movies__item(
        v-for="(movie, index) in movies.slice(0, 10)"
        :key="movie.id"
        @click="handleMovieClick(movie)"
      )
        .top-movies__rank-container
          .top-movies__rank {{ index + 1 }}
        .top-movies__content
          .top-movies__poster
            NuxtImg.top-movies__image(:src="movie.poster" :alt="movie.title" format="webp" loading="lazy")
          .top-movies__overlay
            .top-movies__info
              h3.top-movies__movie-title {{ movie.title }}
              .top-movies__meta
                //span.top-movies__rating {{ movie.imdbRating }}
                span.top-movies__year {{ movie.year }}
</template>

<style lang="sass" src="./index.sass"></style> 
