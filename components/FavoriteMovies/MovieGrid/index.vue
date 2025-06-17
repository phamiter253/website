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
const isHovered = ref(false)

const _handleMovieClick = (movie) => {
  emit('movieClick', movie)
}

const _scrollLeft = () => {
  if (scrollArea.value) {
    const container = scrollArea.value
    const scrollLeft = container.scrollLeft
    
    // Find the first fully visible item from the left
    let targetScrollLeft = 0
    for (let i = 0; i < container.children.length; i++) {
      const item = container.children[i]
      const itemLeft = item.offsetLeft
      const itemWidth = item.offsetWidth
      
      if (itemLeft + itemWidth > scrollLeft) {
        // This is the first visible item, scroll to show the previous item at the edge
        if (i > 0) {
          const prevItem = container.children[i - 1]
          targetScrollLeft = prevItem.offsetLeft
        }
        break
      }
    }
    
    container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
  }
}

const _scrollRight = () => {
  if (scrollArea.value) {
    const container = scrollArea.value
    const containerWidth = container.clientWidth
    const scrollLeft = container.scrollLeft
    const containerRight = scrollLeft + containerWidth
    
    // Find the last fully visible item
    let lastVisibleIndex = -1
    for (let i = 0; i < container.children.length; i++) {
      const item = container.children[i]
      const itemLeft = item.offsetLeft
      const itemRight = itemLeft + item.offsetWidth
      
      // If this item is fully visible
      if (itemLeft >= scrollLeft && itemRight <= containerRight) {
        lastVisibleIndex = i
      }
    }
    
    // Scroll to show the next item after the last fully visible one
    if (lastVisibleIndex >= 0 && lastVisibleIndex < container.children.length - 1) {
      const nextItem = container.children[lastVisibleIndex + 1]
      container.scrollTo({ left: nextItem.offsetLeft, behavior: 'smooth' })
    }
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
  isHovered.value = true
  updateNavButtons()
}

const _onMouseLeave = () => {
  isHovered.value = false
}
</script>

<template lang="pug">
.movie-grid
  .container
    .movie-grid__header
      h2.movie-grid__title {{ _props.title }}
    .movie-grid__container(@mouseenter="_onMouseEnter" @mouseleave="_onMouseLeave")
      button.movie-grid__nav-button.movie-grid__nav-button--left(
        :class="{ 'movie-grid__nav-button--visible': showLeftNav && isHovered }"
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
        :class="{ 'movie-grid__nav-button--visible': showRightNav && isHovered }"
        @click="_scrollRight"
        aria-label="Next movies"
      )
        svg(viewBox="0 0 24 24" fill="currentColor")
          path(d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")
</template>

<style lang="sass" src="./index.sass"></style> 
