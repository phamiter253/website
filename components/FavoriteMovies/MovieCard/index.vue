<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.movie)
}

// Determine call-out badge based on rating
const getCallOut = (movie) => {
  if (movie.imdbRating >= 9.0) return 'Critically Acclaimed'
  if (movie.imdbRating >= 8.5) return 'Highly Rated'
  if (movie.year >= 2020) return 'Recent Release'
  if (movie.genre.includes('Action')) return 'Action Packed'
  return 'Popular'
}
</script>

<template lang="pug">
.movie-card(@click="handleClick" tabindex="0")
  .movie-card__image-container
    NuxtImg.movie-card__image(:src="movie.poster" :alt="movie.title" format="webp" loading="lazy")
    .movie-card__overlay
      h3.movie-card__title(v-html='movie.title')
  .movie-card__focus-info
    .movie-card__info
      .movie-card__meta
        span.movie-card__year {{ movie.year }}
        span.movie-card__age-rating {{ movie.rating }}
        span.movie-card__duration {{ movie.duration }}
      .movie-card__genres
        span.movie-card__genre(v-for="genre in movie.genre.slice(0, 3)" :key="genre") {{ genre }}
    //.movie-card__call-out {{ getCallOut(movie) }}
</template>

<style lang="sass" src="./index.sass"></style> 
