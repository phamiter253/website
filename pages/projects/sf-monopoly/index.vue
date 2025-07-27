<script setup>
  useHead({
    title: 'San Francisco Monopoly | Priscilla Hamiter',
    meta: [
      {
        name: 'description',
        content: 'A San Francisco-themed version of Monopoly featuring iconic SF neighborhoods, landmarks, and local businesses as properties.'
      },
      {
        name: 'keywords',
        content: 'Projects, Portfolio, Priscilla Hamiter, Frontend Developer, San Francisco, Monopoly, Board Game, SF Neighborhoods'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects/sf-monopoly'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "San Francisco Monopoly",
          "author": {
            "@type": "Person",
            "name": "Priscilla Hamiter"
          },
          "datePublished": "2025-01-27",
          "description": "A San Francisco-themed version of Monopoly featuring iconic SF neighborhoods, landmarks, and local businesses as properties.",
          "image": "https://priscillahamiter.com/images/projects/sf-monopoly-preview.jpg",
          "url": "https://priscillahamiter.com/projects/sf-monopoly"
        })
      }
    ]
  })
</script>

<template lang="pug">
  .pages-projects
    .sf-monopoly-content
      h1 San Francisco Monopoly
      p Coming Soon - A San Francisco-themed Monopoly board game
</template>

<style lang="sass" scoped>
.sf-monopoly-content
  padding: 2rem
  text-align: center
  max-width: 1200px
  margin: 0 auto
  
  h1
    font-size: 2.5rem
    margin-bottom: 1rem
    color: #333
    font-weight: bold
    
  > p
    font-size: 1.2rem
    color: #666
    margin-bottom: 3rem
    
.project-info
  margin-top: 4rem
  text-align: left
  
  h2
    font-size: 2rem
    margin-bottom: 1rem
    color: #333
    
  p
    font-size: 1.1rem
    line-height: 1.6
    color: #555
</style> 
