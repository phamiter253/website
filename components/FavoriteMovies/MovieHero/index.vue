<template lang="pug">
.movie-hero
  .movie-hero__background
    iframe.movie-hero__backdrop(
      src="https://www.youtube.com/embed/KiEeIxZJ9x0?autoplay=1&mute=1&loop=1&playlist=KiEeIxZJ9x0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    )
    .movie-hero__gradient
  .container
    .movie-hero__content
      .movie-hero__info
        .movie-hero__logo-container
          h1.movie-hero__title Favorite Movies
        .movie-hero__details
          p.movie-hero__description This is an interactive data visualization showcasing my personal favorite movies, presented through Netflix's modern user interface design. Each film has been carefully curated and organized into categories, featuring detailed metadata including ratings, genres, and release information to create an immersive browsing experience.
</template>

<style lang="sass" src="./index.sass"></style> 
