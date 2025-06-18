<script setup>
import { ref, computed } from 'vue'

const _props = defineProps({
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

// Get nav button width dynamically based on screen size
const navButtonWidth = computed(() => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 480) return 40
    if (window.innerWidth <= 768) return 50
    return 60
  }
  return 60 // fallback for SSR
})

// Check if device is mobile
const isMobile = computed(() => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768
  }
  return false
})

const _handleMovieClick = (movie) => {
  emit('movieClick', movie)
}

const _scrollLeft = () => {
  if (scrollArea.value) {
    const container = scrollArea.value
    const scrollLeft = container.scrollLeft
    
    if (isMobile.value) {
      // Simple mobile scroll: move by one item width + gap
      const firstChild = container.children[0]
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth
        const gap = 8 // gap between items
        const scrollAmount = itemWidth + gap
        container.scrollTo({ left: Math.max(0, scrollLeft - scrollAmount), behavior: 'smooth' })
      }
    } else {
      // Desktop logic: Find the first fully visible item from the left
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
      
      container.scrollTo({ left: targetScrollLeft - navButtonWidth.value, behavior: 'smooth' })
    }
  }
}

const _scrollRight = () => {
  if (scrollArea.value) {
    const container = scrollArea.value
    const scrollLeft = container.scrollLeft
    
    if (isMobile.value) {
      // Simple mobile scroll: move by one item width + gap
      const firstChild = container.children[0]
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth
        const gap = 8 // gap between items
        const scrollAmount = itemWidth + gap
        const maxScroll = container.scrollWidth - container.clientWidth
        container.scrollTo({ left: Math.min(maxScroll, scrollLeft + scrollAmount), behavior: 'smooth' })
      }
    } else {
      // Desktop logic: Find the last fully visible item
      const containerRight = scrollLeft + container.clientWidth
      
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
        container.scrollTo({ left: nextItem.offsetLeft - navButtonWidth.value, behavior: 'smooth' })
      }
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

const _onTouchStart = () => {
  isHovered.value = true
  updateNavButtons()
}

const _onTouchEnd = () => {
  // Keep buttons visible for a short time on mobile
  setTimeout(() => {
    if (isMobile.value) {
      isHovered.value = false
    }
  }, 3000)
}
</script>

<template lang="pug">
.top-movies
  .container
    .top-movies__header
      h2.top-movies__title Top 10 Favorite Movies
    .top-movies__container(
      @mouseenter="_onMouseEnter" 
      @mouseleave="_onMouseLeave"
      @touchstart="_onTouchStart"
      @touchend="_onTouchEnd"
    )
      button.top-movies__nav-button.top-movies__nav-button--left(
        :class="{ 'top-movies__nav-button--visible': showLeftNav && (isHovered || isMobile) }"
        @click="_scrollLeft"
        @touchstart.prevent="_scrollLeft"
        aria-label="Previous movies"
      )
        svg(viewBox="0 0 24 24" fill="currentColor")
          path(d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z")
      
      .top-movies__row(ref="scrollArea" @scroll="_onScroll")
        .top-movies__item(
          v-for="(movie, index) in _props.movies.slice(0, 10)"
          :key="movie.id"
          @click="_handleMovieClick(movie)"
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
      
      button.top-movies__nav-button.top-movies__nav-button--right(
        :class="{ 'top-movies__nav-button--visible': showRightNav && (isHovered || isMobile) }"
        @click="_scrollRight"
        @touchstart.prevent="_scrollRight"
        aria-label="Next movies"
      )
        svg(viewBox="0 0 24 24" fill="currentColor")
          path(d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")
</template>

<style lang="sass" src="./index.sass"></style> 
