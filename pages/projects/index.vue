<script setup>
  useHead({
    title: 'Projects | Priscilla Hamiter',
    meta: [
      {
        name: 'description',
        content: 'Explore personal projects by Priscilla Hamiter.'
      },
      {
        name: 'keywords',
        content: 'Projects, Portfolio, Priscilla Hamiter, Frontend Developer, Data Visualizations, Art, Baking'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects'
      }
    ]
  })
</script>

<template lang="pug">
  .pages-projects__grid
    ProjectGrid
</template>
  