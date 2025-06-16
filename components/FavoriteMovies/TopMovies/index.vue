<script setup>
import { ref } from 'vue'

const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['movieClick'])

const scrollArea = ref(null)
const showLeftNav = ref(false)
const showRightNav = ref(false)

const handleMovieClick = (movie) => {
  emit('movieClick', movie)
}

const scrollLeft = () => {
  if (scrollArea.value) {
    const container = scrollArea.value
    const containerWidth = container.clientWidth
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

const scrollRight = () => {
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
        break
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

const onScroll = () => {
  updateNavButtons()
}

const onMouseEnter = () => {
  updateNavButtons()
}
</script>

<template lang="pug">
.top-movies
  .container
    .top-movies__header
      h2.top-movies__title Top 10 Movies Today
    .top-movies__container(@mouseenter="onMouseEnter")
      button.top-movies__nav-button.top-movies__nav-button--left(
        :class="{ 'top-movies__nav-button--visible': showLeftNav }"
        @click="scrollLeft"
        aria-label="Previous movies"
      )
        svg(viewBox="0 0 24 24" fill="currentColor")
          path(d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z")
      
      .top-movies__row(ref="scrollArea" @scroll="onScroll")
        .top-movies__item(
          v-for="(movie, index) in props.movies.slice(0, 10)"
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
      
      button.top-movies__nav-button.top-movies__nav-button--right(
        :class="{ 'top-movies__nav-button--visible': showRightNav }"
        @click="scrollRight"
        aria-label="Next movies"
      )
        svg(viewBox="0 0 24 24" fill="currentColor")
          path(d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")
</template>

<style lang="sass" src="./index.sass"></style> 
