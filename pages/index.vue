<script setup>
import { useHead } from 'nuxt/app'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@graph": [
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Priscilla Hamiter",
            "url": "https://priscillahamiter.com",
            "image": "https://priscillahamiter.com/profile.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/priscilla-hamiter-668293124",
              "https://github.com/phamiter253",
            ],
            "jobTitle": "Web Developer",
            // "worksFor": {
            //   "@type": "Organization",
            //   "name": "Freelance"
            // },
            "knowsAbout": ["Web Development", "JavaScript", "React", "Vue","HTML", "CSS", "D3.js"],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "University of San Francisco"
            },
            "email": "mailto:priscilla.hamiter.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            }
          },
          {
            "@type": "CreativeWork",
            "name": "Animal Crossing Tinder",
            "creator": {
              "@type": "Person",
              "name": "Priscilla Hamiter"
            },
            "url": "https://priscillahamiter.com/projects/animal-crossing",
            "dateCreated": "2024-01-22",
            "dateModified": "2024-01-10",
            "description": "A web-based Tinder Application populated with Animal Crossing villagers images and information",
            "thumbnailUrl": "https://priscillahamiter.com/images/thumbnails/anima-crossing-tinder-thumnail.jpg"
          },
          {
            "@type": "CreativeWork",
            "name": "Halloween Candy Chocolate Bar Graph",
            "creator": {
              "@type": "Person",
              "name": "Priscilla Hamiter"
            },
            "url": "https://priscillahamiter.com/projects/halloween-candy",
            "dateCreated": "2024-01-17",
            "dateModified": "2024-01-25",
            "description": "A vertical bar chart representing the information from a Halloween Candy dataset from Kaggle",
            "thumbnailUrl": "https://priscillahamiter.com/images/thumbnails/halloween-thumbnail.png"
          }
        ]
      })
    }
  ]
})
</script>

<template lang="pug">
  .pages-home
    HeroHome
</template>
