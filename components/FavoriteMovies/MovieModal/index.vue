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

const isPlayingTrailer = ref(false)

const handleClose = () => {
  isPlayingTrailer.value = false
  emit('close')
}

const _handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    handleClose()
  }
}

const _handlePlayTrailer = () => {
  if (props.movie?.trailer) {
    isPlayingTrailer.value = true
  }
}

const _handleStopTrailer = () => {
  isPlayingTrailer.value = false
}

// Reset trailer state when modal closes or movie changes
watch(() => props.isVisible, (newVal) => {
  if (!newVal) {
    isPlayingTrailer.value = false
  }
})

watch(() => props.movie, () => {
  isPlayingTrailer.value = false
})
</script>

<template lang="pug">
.movie-modal(v-if="isVisible && movie" @click="_handleBackdropClick")
  .movie-modal__content(@click.stop)
    .movie-modal__poster
      // Show trailer video when playing
      iframe.movie-modal__trailer(
        v-if="isPlayingTrailer && movie.trailer"
        :src="movie.trailer + '?autoplay=1&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      )
      // Show poster image when not playing trailer
      NuxtImg.movie-modal__image(
        v-else
        :src="movie.wideImage || movie.poster" 
        :alt="movie.title" 
        format="webp"
      )
      // Play button overlay (only show when not playing trailer and trailer exists)
      button.movie-modal__play-overlay(
        v-if="!isPlayingTrailer && movie.trailer"
        @click="_handlePlayTrailer"
      )
        .movie-modal__play-icon ▶
      button.movie-modal__close(@click="handleClose") ✕
    .movie-modal__info
      h2.movie-modal__title {{ movie.title }}
      .movie-modal__meta
        span.movie-modal__age-rating {{ movie.rating }}
        span.movie-modal__year {{ movie.year }}
        span.movie-modal__duration {{ movie.duration }}
      .movie-modal__genres
        span.movie-modal__genre(v-for="genre in movie.genre" :key="genre") {{ genre }}
      p.movie-modal__description(v-if="movie.description") {{ movie.description }}
      .movie-modal__actions
        button.movie-modal__play(
          v-if="movie.trailer"
          @click="_handlePlayTrailer"
          :disabled="isPlayingTrailer"
        ) {{ isPlayingTrailer ? 'Playing Trailer...' : '▶ Play Trailer' }}
        button.movie-modal__play(v-else disabled) ▶ Trailer Not Available
</template>

<style lang="sass" src="./index.sass"></style> 
