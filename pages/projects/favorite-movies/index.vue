<script setup>
// Use the Netflix layout for this page
definePageMeta({
  layout: 'netflix'
})

useHead({
  title: 'Favorite Movies | Priscilla Hamiter',
  meta: [
    {
      name: 'description',
      content: 'A Netflix-style showcase of my favorite movies with ratings, genres, and descriptions'
    },
    {
      name: 'keywords',
      content: 'Projects, Portfolio, Priscilla Hamiter, Frontend Developer, Movies, Netflix, Favorite Films'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://priscillahamiter.com/projects/favorite-movies'
    }
  ],
  bodyAttrs: {
    class: 'netflix-page'
  }
})
</script>

<template lang="pug">
  FavoriteMovies
</template>

<style lang="sass">
// Netflix page specific styles
.netflix-page
  background: #141414 !important
  margin: 0
  padding: 0
  overflow-x: hidden
</style>
