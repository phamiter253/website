<script setup>
  useHead({
    title: 'Contact Priscilla Hamiter | Frontend Developer for Hire',
    meta: [
      {
        name: 'description',
        content: 'Contact Priscilla Hamiter for frontend development projects. JavaScript, Vue.js, React & D3.js specialist available for collaborations.'
      },
      {
        name: 'keywords',
        content: 'Contact Priscilla Hamiter, Frontend Developer, Hire JavaScript Developer, Vue.js Developer, React Developer, D3.js Specialist, Web Development Services, San Francisco'
      },
      {
        name: 'author',
        content: 'Priscilla Hamiter'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      // Open Graph meta tags
      {
        property: 'og:title',
        content: 'Contact Priscilla Hamiter | Frontend Developer'
      },
      {
        property: 'og:description',
        content: 'Contact Priscilla for frontend development projects. JavaScript, Vue.js, React & D3.js specialist.'
      },
      {
        property: 'og:image',
        content: 'https://priscillahamiter.com/images/profile.jpg'
      },
      {
        property: 'og:url',
        content: 'https://priscillahamiter.com/contact'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/contact'
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
              "name": "Contact",
              "item": "https://priscillahamiter.com/contact"
            }
          ]
        })
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Priscilla Hamiter",
          "description": "Get in touch with Priscilla Hamiter for frontend development projects and collaborations",
          "url": "https://priscillahamiter.com/contact",
          "mainEntity": {
            "@type": "Person",
            "@id": "https://priscillahamiter.com#person",
            "name": "Priscilla Hamiter",
            "jobTitle": "Frontend Developer",
            "email": "priscilla.hamiter@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Professional",
              "email": "priscilla.hamiter@gmail.com",
              "availableLanguage": "English"
            }
          }
        })
      }
    ]
  })
</script>

<template lang="pug">
  .pages-contact
    ContactForm
</template>
