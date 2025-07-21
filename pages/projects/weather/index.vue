<script setup>
  useHead({
    title: 'San Francisco Weather Graph | Priscilla Hamiter',
    meta: [
      { 
        name: "description", content: "Explore a heatmap-inspired visualization of San Francisco's daily average temperatures from January 27, 2025, to yesterday. Each square represents a day, color-coded from cool greens to warm reds, providing insights into seasonal climate trends. Data is updated daily via AWS Lambda, Weather API, and MongoDB." 
      },
      { 
        name: "keywords", content: "San Francisco weather, temperature visualization, heatmap graph, daily average temperature, climate trends, seasonal patterns, AWS Lambda, Weather API, MongoDB, data visualization" 
      },
      { 
        name: "author", content: "Priscilla Hamiter" 
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://priscillahamiter.com/projects/weather'
      },
      { 
        rel: 'preconnect', 
        href: 'https://tuwu420iv8.execute-api.us-west-1.amazonaws.com'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "San Francisco Weather Graph",
          "author": {
            "@type": "Person",
            "name": "Priscilla Hamiter"
          },
          "datePublished": "2024-02-05",
          "description": "A D3.js visualization exploring weather patterns in San Francisco, showing temperature trends over time.",
          "image": "https://priscillahamiter.com/images/weather-background.png",
          "url": "https://priscillahamiter.com/projects/weather"
        })
      }
    ]
  })
</script>
<template lang="pug">
  .pages-projects
    WeatherGraph
</template>
