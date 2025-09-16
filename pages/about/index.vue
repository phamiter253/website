<script setup>
  useHead({
    title: 'About Priscilla Hamiter | Frontend Developer & Data Visualization Specialist',
    meta: [
      {
        name: 'description',
        content: 'Frontend Developer specializing in JavaScript, Vue.js, React & D3.js. Based in San Francisco, working at Rooster Grin Media. USF graduate.'
      },
      {
        name: 'keywords',
        content: 'About Priscilla Hamiter, Frontend Developer, JavaScript Developer, Vue.js, React, D3.js, Data Visualization, Web Developer, San Francisco, University of San Francisco, Rooster Grin Media, Skills, Experience, Background'
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
        content: 'About Priscilla Hamiter | Frontend Developer & Data Visualization Specialist'
      },
      {
        property: 'og:description',
        content: 'Frontend Developer specializing in JavaScript, Vue.js, React, and D3.js. Based in San Francisco, creating interactive web experiences.'
      },
      {
        property: 'og:image',
        content: 'https://priscillahamiter.com/images/profile.jpg'
      },
      {
        property: 'og:url',
        content: 'https://priscillahamiter.com/about'
      },
      {
        property: 'og:type',
        content: 'profile'
      },
      // Twitter Card meta tags
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'About Priscilla Hamiter | Frontend Developer'
      },
      {
        name: 'twitter:description',
        content: 'Frontend Developer specializing in JavaScript, Vue.js, React, and D3.js data visualizations.'
      },
      {
        name: 'twitter:image',
        content: 'https://priscillahamiter.com/images/profile.jpg'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/about'
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
              "name": "About",
              "item": "https://priscillahamiter.com/about"
            }
          ]
        })
      }
    ]
  })
</script>

<template lang="pug">
  .pages-about
    AboutSection
</template>
