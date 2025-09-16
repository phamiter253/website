<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: 'Priscilla Hamiter - Frontend Developer Portfolio | JavaScript & D3.js Specialist',
    meta: [
      {
        name: 'description',
        content: `Frontend Developer specializing in JavaScript, Vue.js, React & D3.js. Explore interactive projects: Animal Crossing Tinder, data visualizations & more.`
      },
      {
        name: 'keywords',
        content: 'Priscilla Hamiter, Frontend Developer, JavaScript Developer, Vue.js, React, D3.js, Data Visualization, Web Developer, San Francisco, Portfolio, Interactive Projects, Animal Crossing, Halloween Candy, Weather Data, Movie Database'
      },
      {
        name: 'author',
        content: 'Priscilla Hamiter'
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      },
      // Open Graph meta tags for better social sharing and search results
      {
        property: 'og:title',
        content: 'Priscilla Hamiter - Frontend Developer Portfolio'
      },
      {
        property: 'og:description',
        content: 'Frontend Developer specializing in JavaScript, Vue.js, React, and D3.js data visualizations. Explore interactive projects and creative web applications.'
      },
      {
        property: 'og:image',
        content: 'https://priscillahamiter.com/images/profile.jpg'
      },
      {
        property: 'og:image:width',
        content: '1200'
      },
      {
        property: 'og:image:height',
        content: '630'
      },
      {
        property: 'og:url',
        content: 'https://priscillahamiter.com'
      },
      {
        property: 'og:type',
        content: 'profile'
      },
      {
        property: 'og:site_name',
        content: 'Priscilla Hamiter Portfolio'
      },
      {
        property: 'profile:first_name',
        content: 'Priscilla'
      },
      {
        property: 'profile:last_name',
        content: 'Hamiter'
      },
      {
        property: 'profile:username',
        content: 'phamiter253'
      },
      // Twitter Card meta tags
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Priscilla Hamiter - Frontend Developer Portfolio'
      },
      {
        name: 'twitter:description',
        content: 'Frontend Developer specializing in JavaScript, Vue.js, React, and D3.js data visualizations.'
      },
      {
        name: 'twitter:image',
        content: 'https://priscillahamiter.com/images/profile.jpg'
      },
      {
        name: 'twitter:creator',
        content: '@priscillahamiter'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com'
      }
    ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://priscillahamiter.com#person",
          "name": "Priscilla Hamiter",
          "url": "https://priscillahamiter.com",
          "image": {
            "@type": "ImageObject",
            "url": "https://priscillahamiter.com/images/profile.jpg",
            "width": 400,
            "height": 400
          },
          "sameAs": [
            "https://www.linkedin.com/in/priscilla-hamiter-668293124",
            "https://github.com/phamiter253"
          ],
          "jobTitle": "Frontend Developer",
          "description": "Portfolio of Priscilla Hamiter, a frontend web developer specializing in JavaScript, Vue.js, React, D3.js, and creative visual applications. Based in San Francisco, creating interactive data visualizations and modern web experiences.",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "University of San Francisco",
            "url": "https://www.usfca.edu"
          },
          "worksFor": {
            "@type": "Organization",
            "@id": "https://www.roostergrin.com#organization",
            "name": "Rooster Grin Media",
            "url": "https://www.roostergrin.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.roostergrin.com/wp-content/uploads/2019/11/rg-logo.png",
              "width": 200,
              "height": 200
            },
            "description": "A San Francisco-based software company that offers a full range of services from website design to online marketing",
            "foundingDate": "2015",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/rooster-grin-media",
              "https://twitter.com/roostergrin"
            ]
          },
          "knowsAbout": [
            "Web Development", "JavaScript", "React", "Vue.js", "Nuxt.js", "HTML5", "CSS3", "SASS", "D3.js", "Data Visualization", "Frontend Architecture", "Responsive Design", "User Interface Design"
          ],
          "email": "priscilla.hamiter@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Frontend Developer",
            "occupationLocation": {
              "@type": "City",
              "name": "San Francisco"
            },
            "skills": "JavaScript, Vue.js, React, D3.js, HTML, CSS, SASS, Data Visualization"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://priscillahamiter.com"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://priscillahamiter.com#website",
        "name": "Priscilla Hamiter Portfolio",
        "alternateName": "Priscilla Hamiter Frontend Developer",
        "url": "https://priscillahamiter.com",
        "description": "Frontend Developer Portfolio showcasing JavaScript, Vue.js, React, and D3.js projects",
        "publisher": {
          "@type": "Person",
          "@id": "https://priscillahamiter.com#person",
          "name": "Priscilla Hamiter"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://priscillahamiter.com/projects?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "mainEntity": {
          "@type": "Person",
          "@id": "https://priscillahamiter.com#person"
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What programming languages does Priscilla Hamiter specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Priscilla specializes in JavaScript, Vue.js, React, HTML5, CSS3, SASS, and D3.js for data visualization. She also has experience with Nuxt.js for full-stack applications."
            }
          },
          {
            "@type": "Question", 
            "name": "What type of projects does Priscilla Hamiter create?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Priscilla creates interactive web applications including data visualizations, gaming interfaces, movie databases, and creative web experiences. Her notable projects include Animal Crossing Tinder, Halloween Candy visualizations, and Netflix-style interfaces."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Priscilla Hamiter located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Priscilla is based in San Francisco, California, and currently works at Rooster Grin Media as a Frontend Developer."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Priscilla Hamiter's portfolio unique?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Priscilla combines technical frontend development skills with creative design, specializing in interactive data visualizations and unique user experiences. Her projects showcase both technical proficiency and creative problem-solving."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Priscilla Hamiter for collaboration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Priscilla through her portfolio website at priscillahamiter.com/contact, connect with her on LinkedIn, or find her on GitHub @phamiter253."
            }
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
