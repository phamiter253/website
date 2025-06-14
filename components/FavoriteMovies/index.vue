<script setup>
import moviesData from '~/utils/data/movies.json'

const { featured: _featured, categories: _categories } = moviesData
const selectedMovie = ref(null)
const isModalVisible = ref(false)

const _showMovieDetails = (movie) => {
  selectedMovie.value = movie
  isModalVisible.value = true
}

const _closeModal = () => {
  selectedMovie.value = null
  isModalVisible.value = false
}
</script>

<template lang="pug">
.favorite-movies
  FavoriteMoviesMovieHero(:movie="_featured" @show-details="_showMovieDetails")
  
  .favorite-movies__content
    FavoriteMoviesTopMovies(
      :movies="_categories.top10"
      @movie-click="_showMovieDetails"
    )
    
    FavoriteMoviesMovieGrid(
      title="Animation"
      :movies="_categories.animation"
      @movie-click="_showMovieDetails"
    )
    
    FavoriteMoviesMovieGrid(
      title="International Cinema"
      :movies="_categories.international"
      @movie-click="_showMovieDetails"
    )
    
    FavoriteMoviesMovieGrid(
      title="Recent Favorites"
      :movies="_categories.recent"
      @movie-click="_showMovieDetails"
    )
    
    FavoriteMoviesMovieGrid(
      title="Sci-Fi & Mind-Benders"
      :movies="_categories.scifi"
      @movie-click="_showMovieDetails"
    )
    
    FavoriteMoviesMovieGrid(
      title="Comedy & Feel Good"
      :movies="_categories.comedy"
      @movie-click="_showMovieDetails"
    )
    
    FavoriteMoviesMovieGrid(
      title="Auteur Cinema"
      :movies="_categories.auteur"
      @movie-click="_showMovieDetails"
    )
  
  FavoriteMoviesMovieModal(
    :movie="selectedMovie"
    :is-visible="isModalVisible"
    @close="_closeModal"
  )
</template>

<style lang="sass" src="./index.sass"></style>
