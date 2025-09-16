<script setup>
  useHead({
    title: 'Projects Portfolio | Priscilla Hamiter - Frontend Developer',
    meta: [
      {
        name: 'description',
        content: 'Interactive web projects: Animal Crossing Tinder, D3.js data visualizations, Halloween candy charts, SF weather graphs & Netflix-style interfaces.'
      },
      {
        name: 'keywords',
        content: 'Priscilla Hamiter Projects, Frontend Developer Portfolio, JavaScript Projects, D3.js Visualizations, Vue.js Applications, Interactive Web Apps, Data Visualization, Animal Crossing, Halloween Candy, Weather Data, Movie Database'
      },
      {
        name: 'author',
        content: 'Priscilla Hamiter'
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large'
      },
      // Open Graph meta tags
      {
        property: 'og:title',
        content: 'Projects Portfolio | Priscilla Hamiter - Frontend Developer'
      },
      {
        property: 'og:description',
        content: 'Explore interactive projects including Animal Crossing Tinder, D3.js data visualizations, and creative web applications.'
      },
      {
        property: 'og:image',
        content: 'https://priscillahamiter.com/images/thumbnails/anima-crossing-tinder-thumnail.jpg'
      },
      {
        property: 'og:url',
        content: 'https://priscillahamiter.com/projects'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      // Twitter Card meta tags
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Projects Portfolio | Priscilla Hamiter'
      },
      {
        name: 'twitter:description',
        content: 'Interactive projects including Animal Crossing Tinder, D3.js visualizations, and creative web applications.'
      },
      {
        name: 'twitter:image',
        content: 'https://priscillahamiter.com/images/thumbnails/anima-crossing-tinder-thumnail.jpg'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects'
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
            }
          ]
        })
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Frontend Developer Projects Portfolio",
          "description": "A collection of interactive web projects showcasing frontend development skills in JavaScript, Vue.js, D3.js, and data visualization.",
          "url": "https://priscillahamiter.com/projects",
          "author": {
            "@type": "Person",
            "@id": "https://priscillahamiter.com#person",
            "name": "Priscilla Hamiter"
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Featured Web Development Projects",
            "description": "Portfolio showcasing interactive web applications and data visualizations",
            "numberOfItems": 4,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Animal Crossing Tinder",
                "url": "https://priscillahamiter.com/projects/animal-crossing"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Halloween Candy Data Visualization",
                "url": "https://priscillahamiter.com/projects/halloween-candy"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Favorite Movies Collection",
                "url": "https://priscillahamiter.com/projects/favorite-movies"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "San Francisco Weather Visualization",
                "url": "https://priscillahamiter.com/projects/weather"
              }
            ]
          }
        })
      }
    ]
  })
</script>

<template lang="pug">
  .pages-projects__grid
    HeroProjects
    ProjectGrid
</template>
  