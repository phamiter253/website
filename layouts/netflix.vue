<template lang="pug">
.netflix-layout
  .netflix-header(:class="{ scrolled: isScrolled }")
    .netflix-header__container
      .netflix-header__left
        NuxtLink.netflix-logo(to="/")
          span PRISCILLA
      .netflix-header__right
        .netflix-nav
          NuxtLink.netflix-nav__item(to="/projects") Projects
          NuxtLink.netflix-nav__item(to="/about") About
          NuxtLink.netflix-nav__item(to="/contact") Contact
        .netflix-profile
          .netflix-profile__avatar
            span P
  
  main.netflix-main
    NuxtPage
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Add Netflix class to body
  document.body.classList.add('netflix-body')
  // Set initial scroll state
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Remove Netflix class from body
  document.body.classList.remove('netflix-body')
})
</script>

<style lang="sass">
.netflix-layout
  background: #141414
  color: #ffffff
  min-height: 100vh
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif

.netflix-header
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 1000
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)
  transition: all 0.4s ease
  padding: 0 4%
  
  &.scrolled
    background: rgba(20, 20, 20, 0.95)
    backdrop-filter: blur(10px)
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.15)

  &__container
    display: flex
    align-items: center
    justify-content: space-between
    height: 68px
    max-width: none

  &__left
    display: flex
    align-items: center

  &__right
    display: flex
    align-items: center
    gap: 24px

.netflix-logo
  font-size: 24px
  font-weight: 900
  color: #e50914
  text-decoration: none
  letter-spacing: 2px
  transition: color 0.2s ease
  
  &:hover
    color: #f40612

.netflix-nav
  display: flex
  align-items: center
  gap: 20px
  
  @media (max-width: 768px)
    display: none

  &__item
    color: #e5e5e5
    text-decoration: none
    font-size: 14px
    font-weight: 400
    transition: color 0.4s ease
    position: relative
    
    &:hover
      color: #b3b3b3
    
    &.router-link-active
      color: #ffffff
      font-weight: 500

.netflix-profile
  display: flex
  align-items: center
  
  &__avatar
    width: 32px
    height: 32px
    background: #e50914
    border-radius: 4px
    display: flex
    align-items: center
    justify-content: center
    font-size: 14px
    font-weight: 600
    cursor: pointer
    transition: background-color 0.2s ease
    
    &:hover
      background: #f40612

.netflix-main
  padding-top: 0
  min-height: 100vh
  background: #141414

// Global Netflix theme styles
:global(body:has(.netflix-layout))
  background: #141414 !important
  margin: 0
  padding: 0
  overflow-x: hidden

// Smooth scrolling
:global(html)
  scroll-behavior: smooth

// Custom scrollbar for Netflix theme
:global(::-webkit-scrollbar)
  width: 8px

:global(::-webkit-scrollbar-track)
  background: #141414

:global(::-webkit-scrollbar-thumb)
  background: #333333
  border-radius: 4px
  
  &:hover
    background: #555555

// Remove default margins and padding for Netflix layout
:global(.netflix-layout *)
  box-sizing: border-box

// Ensure container styles work with Netflix layout
:global(.netflix-layout .container)
  max-width: none
  padding: 0 4%
  margin: 0
</style> 
