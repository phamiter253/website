<script setup>
  useHead({
    title: 'Game Concept: Insecticide | Priscilla Hamiter',
    meta: [
      {
        name: 'description',
        content: 'Insecticide is a noir mystery adventure where a moth mortician solves a murder aboard a train filled with anthropomorphic insect characters.'
      },
      {
        name: 'keywords',
        content: 'Projects, Portfolio, Priscilla Hamiter, mystery adventure, noir detective, insect game, train thriller, puzzle investigation, narrative-driven game, indie mystery'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects/insecticide'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Insecticide – Game Concept",
          "author": {
            "@type": "Person",
            "name": "Priscilla Hamiter"
          },
          "datePublished": "2024-03-01",
          "description": "A game concept with insects, trains, and murder!",
          "image": "https://priscillahamiter.com/images/insecticide/insecticide-logo.svg",
          "url": "https://priscillahamiter.com/projects/insecticide"
        })
      }
    ]
  })
</script>
<template lang="pug">
  .pages-projects__game
    HeroInsecticide
    InsecticideContent
</template>
