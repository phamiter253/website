<script setup>
  useHead({
    title: 'Weather Graph | Priscilla Hamiter',
    meta: [
      // {
      //   name: 'description',
      //   content: 'A horizontal bar chart representing the information from a Halloween Candy dataset from Kaggle'
      // },
      {
        name: 'keywords',
        content: 'Projects, Portfolio, Priscilla Hamiter, Frontend Developer, D3.js'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects/weather'
      },
      { 
        rel: 'preconnect', 
        href: 'https://tuwu420iv8.execute-api.us-west-1.amazonaws.com'
      }
    ]
  })
</script>
<template lang="pug">
  .pages-projects
    WeatherGraph
</template>
