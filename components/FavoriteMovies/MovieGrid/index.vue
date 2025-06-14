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
      .movie-grid__scroll-area(ref="scrollArea" @scroll="_onScroll")
        FavoriteMoviesMovieCard(
          v-for="movie in _props.movies" 
          :key="movie.id" 
          :movie="movie" 
          @click="_handleMovieClick"
        )
</template>

<style lang="sass" src="./index.sass"></style> 
