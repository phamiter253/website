<template lang="pug">
  .about-section
    .about-section__hero
      .about-section__hero-content
        .container
          .about-section__hero-left
            .about-section__hero-image-container
              NuxtImg.about-section__hero-image(src='/images/profile.jpg' format="webp" alt='Profile picture of Priscilla' loading="lazy")
          
          .about-section__hero-right
            h1.about-section__hero-title
              span.about-section__hero-title-main Code,
              span.about-section__hero-title-accent Creative
            
            .about-section__hero-text
              p Crafting beautiful frontend experiences and custom website designs that blend technical precision with creative vision.
              p With over 5 years in engineering leadership, I specialize in modern web development using React, Vue.js, and Nuxt.js. When I'm not coding, you'll find me experimenting with new baking recipes or working on art projects—creativity flows through everything I do, from pixel-perfect interfaces to perfectly risen sourdough.

            .about-section__socials
              a.about-section__social-link(href='https://github.com/phamiter253' target='_blank' aria-label='Opens Github account in new window')
                img(src='/images/github.svg' alt='Github logo')
              a.about-section__social-link(href='https://www.linkedin.com/in/priscilla-hamiter-668293124' target='_blank' aria-label='Opens LinkedIn account in new window')
                img(src='/images/linkedin.svg' alt='Linkedin logo')
    
    .about-section__main
      .container
        .about-section__content
          .about-section__section
            h2.about-section__section-title About
            p.about-section__bio Committed, innovative Senior Engineering Manager with over 5 years of professional experience in web applications design, creative design, and leadership through excellent communication. Familiar with agile development of web apps and fast-paced, collaborative workflows.
            p.about-section__bio-continued Comfortable debugging or troubleshooting front-end and back end development environments with computer programming and problem-solving skills. Can diagnose, develop, or manage a web applications ecosystem, including use cases with APIs. Known for reliability, influencing team culture, and programming prowess.
          
          .about-section__section
            h2.about-section__section-title Experience
            
            .about-section__experience-slider
              .about-section__slider-container
                .about-section__slider-track(:style="{ transform: `translateX(-${currentSlide * 100}%)` }")
                  .about-section__experience-item
                    .about-section__experience-header
                      h3.about-section__job-title Frontend Developer
                      p.about-section__company Rooster Grin Media • San Francisco, CA
                    ul.about-section__job-description
                      li Builds next-generation, ADA-compliant websites using Nuxt.js and AWS, ensuring optimized performance, scalability, and accessibility for all users.
                      li Develops customized websites by designing and implementing features aligned with business' branding.
                      li Presents websites to clients, conducting detailed walkthroughs and demonstrating all site components' functionality and design.
                  
                  .about-section__experience-item
                    .about-section__experience-header
                      h3.about-section__job-title Lead Web Developer Support
                      p.about-section__company Rooster Grin Media • San Francisco, CA
                    ul.about-section__job-description
                      li Problem-solved with clients, ensuring problems that arise are resolved in a timely & friendly manner. Managed and maintained over 900 websites.
                      li Set processes & guidelines for site templates, worked with Web Development Team for build and launch.
                      li Employed familiarity with WordPress APIs, open-source deployments, and creative tools in troubleshooting.
                  
                  .about-section__experience-item
                    .about-section__experience-header
                      h3.about-section__job-title Software Engineer Intern
                      p.about-section__company Reactful • San Francisco, CA
                    ul.about-section__job-description
                      li Redesigned and implemented front end with React, Bootstrap, and custom CSS frameworks.
                      li Expanded backend functionality of Neon Juice API and implemented frontend connections.
                      li Brainstormed and created multiple wireframes and types of workflow for website builder/generator web application.
              
              .about-section__slider-controls
                //- button.about-section__slider-arrow.about-section__slider-arrow--prev(@click="prevSlide" :disabled="currentSlide === 0")
                //-   svg(width="24" height="24" viewBox="0 0 24 24" fill="none")
                //-     path(d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
                
                .about-section__slider-dots
                  button.about-section__slider-dot(
                    v-for="(item, index) in experienceItems" 
                    :key="index"
                    @click="goToSlide(index)"
                    :class="{ 'about-section__slider-dot--active': currentSlide === index }"
                  )
                
                //- button.about-section__slider-arrow.about-section__slider-arrow--next(@click="nextSlide" :disabled="currentSlide === experienceItems.length - 1")
                //-   svg(width="24" height="24" viewBox="0 0 24 24" fill="none")
                //-     path(d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
          
          //- .about-section__section
          //-   h2.about-section__section-title Education
          //-   .about-section__education-item
          //-     h3.about-section__degree Bachelor of Science, Computer Science
          //-     p.about-section__school University of San Francisco • San Francisco, CA
          
          //- .about-section__section
          //-   h2.about-section__section-title Technical Skills
            
          //-   .about-section__skills-grid
          //-     .about-section__skill-category
          //-       h4.about-section__skill-category-title Languages & Frameworks
          //-       .about-section__skill-tags
          //-         span.about-section__skill-tag JavaScript
          //-         span.about-section__skill-tag Python
          //-         span.about-section__skill-tag Java
          //-         span.about-section__skill-tag TypeScript
          //-         span.about-section__skill-tag HTML/CSS
          //-         span.about-section__skill-tag PHP
          //-         span.about-section__skill-tag SQL
              
          //-     .about-section__skill-category
          //-       h4.about-section__skill-category-title Frontend Technologies
          //-       .about-section__skill-tags
          //-         span.about-section__skill-tag React
          //-         span.about-section__skill-tag Vue.js
          //-         span.about-section__skill-tag Nuxt.js
          //-         span.about-section__skill-tag Next.js
          //-         span.about-section__skill-tag D3.js
          //-         span.about-section__skill-tag Redux
          //-         span.about-section__skill-tag GraphQL
              
          //-     .about-section__skill-category
          //-       h4.about-section__skill-category-title Cloud & Infrastructure
          //-       .about-section__skill-tags
          //-         span.about-section__skill-tag AWS
          //-         span.about-section__skill-tag EC2
          //-         span.about-section__skill-tag Lambda
          //-         span.about-section__skill-tag CloudFront
          //-         span.about-section__skill-tag WordPress
          //-         span.about-section__skill-tag DNS Management
              
          //-     .about-section__skill-category
          //-       h4.about-section__skill-category-title Design & Tools
          //-       .about-section__skill-tags
          //-         span.about-section__skill-tag Adobe Creative Suite
          //-         span.about-section__skill-tag UI/UX Design
          //-         span.about-section__skill-tag AutoCAD
          //-         span.about-section__skill-tag Git
          //-         span.about-section__skill-tag Agile Development

</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)
const experienceItems = ref([
  {
    title: 'Frontend Developer',
    company: 'Rooster Grin Media • San Francisco, CA'
  },
  {
    title: 'Lead Web Developer Support', 
    company: 'Rooster Grin Media • San Francisco, CA'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Reactful • San Francisco, CA'
  }
])

function nextSlide() {
  if (currentSlide.value < experienceItems.value.length - 1) {
    currentSlide.value++
  }
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

function goToSlide(index) {
  currentSlide.value = index
}
</script>

<style lang="sass" src="./index.sass"></style>
