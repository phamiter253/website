<script setup>
import { ref } from 'vue'

const _props = defineProps({
  title: {
    type: String,
    required: true
  },
  movies: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['movieClick'])

const scrollArea = ref(null)
const showLeftNav = ref(false)
const showRightNav = ref(false)

const _handleMovieClick = (movie) => {
  emit('movieClick', movie)
}

const _scrollLeft = () => {
  if (scrollArea.value) {
    scrollArea.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

const _scrollRight = () => {
  if (scrollArea.value) {
    scrollArea.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

const updateNavButtons = () => {
  if (!scrollArea.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollArea.value
  showLeftNav.value = scrollLeft > 0
  showRightNav.value = scrollLeft < scrollWidth - clientWidth - 10
}

const _onScroll = () => {
  updateNavButtons()
}

const _onMouseEnter = () => {
  updateNavButtons()
}
</script>

<template lang="pug">
.movie-grid
  .container
    .movie-grid__header
      h2.movie-grid__title {{ _props.title }}
    .movie-grid__container(@mouseenter="_onMouseEnter")
      button.movie-grid__nav-button.movie-grid__nav-button--left(
        :class="{ 'movie-grid__nav-button--visible': showLeftNav }"
        @click="_scrollLeft"
        aria-label="Previous movies"
      )
        svg(viewBox="0 0 24 24" fill="currentColor")
          path(d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z")
      
      .movie-grid__scroll-area(ref="scrollArea" @scroll="_onScroll")
        FavoriteMoviesMovieCard(
          v-for="movie in _props.movies" 
          :key="movie.id" 
          :movie="movie" 
          @click="_handleMovieClick"
        )
      
      button.movie-grid__nav-button.movie-grid__nav-button--right(
        :class="{ 'movie-grid__nav-button--visible': showRightNav }"
        @click="_scrollRight"
        aria-label="Next movies"
      )
        svg(viewBox="0 0 24 24" fill="currentColor")
          path(d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")
</template>

<style lang="sass" src="./index.sass"></style> 
