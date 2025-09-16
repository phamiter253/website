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
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://priscillahamiter.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Projects",
              "item": "https://priscillahamiter.com/projects"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Animal Crossing Tinder",
              "item": "https://priscillahamiter.com/projects/animal-crossing"
            }
          ]
        })
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Animal Crossing Tinder - Interactive Dating App",
          "description": "A fun Tinder-style dating app using Animal Crossing villager characters, built with JavaScript and D3.js.",
          "url": "https://priscillahamiter.com/projects/animal-crossing",
          "image": "https://priscillahamiter.com/images/thumbnails/anima-crossing-tinder-thumnail.jpg",
          "author": {
            "@type": "Person",
            "@id": "https://priscillahamiter.com#person",
            "name": "Priscilla Hamiter"
          },
          "dateCreated": "2024-08-22",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://priscillahamiter.com#website"
          }
        })
      }
    ]
  })
</script>
<template lang="pug">
  .pages-projects
    AnimalSwipe
</template>
