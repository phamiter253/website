<script setup>
const props = defineProps({
  movie: {
    type: Object,
    default: null
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    handleClose()
  }
}
</script>

<template lang="pug">
.movie-modal(v-if="isVisible && movie" @click="handleBackdropClick")
  .movie-modal__content(@click.stop)
    .movie-modal__poster
      NuxtImg.movie-modal__image(:src="movie.poster" :alt="movie.title" format="webp")
      button.movie-modal__close(@click="handleClose") ✕
    .movie-modal__info
      h2.movie-modal__title {{ movie.title }}
      .movie-modal__meta
        .movie-modal__rating
          span.movie-modal__star ★
          span.movie-modal__score {{ movie.imdbRating }}
        span.movie-modal__age-rating {{ movie.rating }}
        span.movie-modal__year {{ movie.year }}
        span.movie-modal__duration {{ movie.duration }}
      .movie-modal__genres
        span.movie-modal__genre(v-for="genre in movie.genre" :key="genre") {{ genre }}
      p.movie-modal__description(v-if="movie.description") {{ movie.description }}
      .movie-modal__actions
        button.movie-modal__play ▶ Play
</template>

<style lang="sass" src="./index.sass"></style> 
