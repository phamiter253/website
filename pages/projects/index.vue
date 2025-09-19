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
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Creative Arts Gallery - Baking & Gift Design",
          "description": "Visual showcase of creative non-coding projects including artisan baking, culinary design, gift wrapping, and aesthetic presentation work",
          "url": "https://priscillahamiter.com/projects",
          "author": {
            "@type": "Person",
            "@id": "https://priscillahamiter.com#person",
            "name": "Priscilla Hamiter"
          },
          "image": [
            {
              "@type": "ImageObject",
              "name": "Paper Mache Lion Statue",
              "description": "Artistic baking creations and food styling showcasing creativity in culinary arts and presentation",
              "url": "https://priscillahamiter.com/images/projects/project-02.jpg",
              "width": 1200,
              "height": 630,
              "contentUrl": "https://priscillahamiter.com/projects",
              "creator": {
                "@type": "Person",
                "name": "Priscilla Hamiter"
              },
              "keywords": ["Paper Mache", "Lion Statue", "Creative Presentation"]
            },
            {
              "@type": "ImageObject",
              "name": "White Elephant Gift Wrapping",
              "description": "Elegant gift wrapping and package design showcasing attention to detail and aesthetic presentation",
              "url": "https://priscillahamiter.com/images/projects/project-17.jpg",
              "width": 1200,
              "height": 630,
              "contentUrl": "https://priscillahamiter.com/projects",
              "creator": {
                "@type": "Person",
                "name": "Priscilla Hamiter"
              },
              "keywords": ["Gift Wrapping", "Package Design", "Creative Presentation", "Detail Work", "Aesthetic Design"]
            },
            {
              "@type": "ImageObject",
              "name": "Turkey Shaped Pretzels",
              "description": "Creative baking creations and food styling showcasing creativity in culinary arts and presentation",
              "url": "https://priscillahamiter.com/images/projects/project-24.jpg",
              "width": 1200,
              "height": 630,
              "contentUrl": "https://priscillahamiter.com/projects",
              "creator": {
                "@type": "Person",
                "name": "Priscilla Hamiter"
              },
              "keywords": ["Baking", "Food Design", "Culinary Arts", "Creative Presentation", "Food Styling"]
            },
            {
              "@type": "ImageObject",
              "name": "Graduation Lei",
              "description": "Creative presentation showcasing artistic approach to graduation lei",
              "url": "https://priscillahamiter.com/images/projects/project-26.jpg",
              "width": 1200,
              "height": 630,
              "contentUrl": "https://priscillahamiter.com/projects",
              "creator": {
                "@type": "Person",
                "name": "Priscilla Hamiter"
              },
              "keywords": ["Graduation Lei", "Creative Presentation"]
            },
            {
              "@type": "ImageObject",
              "name": "Melted Candle Birthday Cake",
              "description": "Custom baked goods and specialty desserts showcasing advanced baking techniques and creative design",
              "url": "https://priscillahamiter.com/images/projects/project-30a.jpg",
              "width": 1200,
              "height": 630,
              "contentUrl": "https://priscillahamiter.com/projects",
              "creator": {
                "@type": "Person",
                "name": "Priscilla Hamiter"
              },
              "keywords": ["Specialty Baking", "Custom Desserts", "Advanced Techniques", "Creative Baking", "Dessert Design"]
            }
          ]
        })
      }
    ]
  })
</script>

<template lang="pug">
  .pages-projects__grid
    h1(style='display: none') Projects
    ProjectGrid
</template>
  