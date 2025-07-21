<script setup>
  useHead({
    title: 'Halloween Candy Chocolate Bar Graph | Priscilla Hamiter',
    meta: [
      {
        name: 'description',
        content: 'A horizontal bar chart representing the information from a Halloween Candy dataset from Kaggle'
      },
      {
        name: 'keywords',
        content: 'Projects, Portfolio, Priscilla Hamiter, Frontend Developer, Halloween Candy, Bar Chart, Bar Graph, D3.js'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects/halloween-candy'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Halloween Candy Chocolate Bar Graph",
          "author": {
            "@type": "Person",
            "name": "Priscilla Hamiter"
          },
          "datePublished": "2024-01-17",
          "dateModified": "2024-01-27",
          "description": "A horizontal bar chart built with D3.js that visualizes Halloween candy preferences using a Kaggle dataset.",
          "image": "https://priscillahamiter.com/images/thumbnails/halloween-thumbnail.png",
          "url": "https://priscillahamiter.com/projects/halloween-candy"
        })
      }
    ]
  })
</script>
<template lang="pug">
  .pages-projects
    ChocolateChart
</template>
