<script setup>
  useHead({
    title: 'Animal Crossing Tinder | Priscilla Hamiter',
    meta: [
      {
        name: 'description',
        content: 'A web-based Tinder Application populated with Animal Crossing villagers images and information'
      },
      {
        name: 'keywords',
        content: 'Projects, Portfolio, Priscilla Hamiter, Frontend Developer, Web App, Animal Crossing, Tinder'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects/animal-crossing'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Animal Crossing Tinder",
          "author": {
            "@type": "Person",
            "name": "Priscilla Hamiter"
          },
          "datePublished": "2024-01-22",
          "description": "A fun Tinder-style app using Animal Crossing characters, built with JavaScript and D3.js.",
          "image": "https://priscillahamiter.com/images/thumbnails/anima-crossing-tinder-thumnail.jpg",
          "url": "https://priscillahamiter.com/projects/animal-crossing"
        })
      }
    ]
  })
</script>
<template lang="pug">
  .pages-projects
    AnimalSwipe
</template>
