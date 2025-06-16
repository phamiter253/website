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
        // Mobile menu button
        .netflix-mobile-menu-btn(@click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }")
          span
          span
          span
  
  // Mobile menu overlay
  .netflix-mobile-menu(:class="{ open: isMobileMenuOpen }")
    .netflix-mobile-menu__close(@click="closeMobileMenu")
      span ×
    .netflix-mobile-menu__container
      .netflix-mobile-nav
        NuxtLink.netflix-mobile-nav__item(to="/projects" @click="closeMobileMenu") Projects
        NuxtLink.netflix-mobile-nav__item(to="/about" @click="closeMobileMenu") About
        NuxtLink.netflix-mobile-nav__item(to="/contact" @click="closeMobileMenu") Contact
  
  main.netflix-main
    NuxtPage
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when mobile menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close mobile menu when clicking outside or pressing escape
const handleKeydown = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleKeydown)
  // Add Netflix class to body
  document.body.classList.add('netflix-body')
  // Set initial scroll state
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
  // Remove Netflix class from body
  document.body.classList.remove('netflix-body')
  // Reset body overflow
  document.body.style.overflow = ''
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

// Mobile menu button
.netflix-mobile-menu-btn
  display: none
  flex-direction: column
  justify-content: center
  width: 24px
  height: 24px
  cursor: pointer
  z-index: 1001
  
  @media (max-width: 768px)
    display: flex
  
  span
    width: 100%
    height: 2px
    background: #ffffff
    margin: 3px 0
    transition: all 0.3s ease
    transform-origin: center
    
  &.active
    span:nth-child(1)
      transform: rotate(45deg) translate(6px, 6px)
      
    span:nth-child(2)
      opacity: 0
      
    span:nth-child(3)
      transform: rotate(-45deg) translate(6px, -6px)

// Mobile menu overlay
.netflix-mobile-menu
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: rgba(20, 20, 20, 0.98)
  backdrop-filter: blur(10px)
  z-index: 1000
  display: flex
  align-items: center
  justify-content: center
  transform: translateX(-100%)
  transition: transform 0.3s ease
  
  @media (min-width: 769px)
    display: none
  
  &.open
    transform: translateX(0)
  
  &__container
    width: 100%
    max-width: 400px
    padding: 0 32px
    position: relative
  
  &__close
    position: absolute
    top: 0
    right: 0
    width: 48px
    height: 48px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    //border-radius: 50%
    //background: rgba(255, 255, 255, 0.1)
    backdrop-filter: blur(10px)
    transition: all 0.3s ease
    
    &:hover
      background: rgba(229, 9, 20, 0.2)
      //transform: scale(1)
    
    span
      color: #ffffff
      font-size: 38px
      font-weight: 300
      line-height: 1

.netflix-mobile-nav
  display: flex
  flex-direction: column
  align-items: center
  gap: 32px
  
  &__item
    color: #ffffff
    text-decoration: none
    font-size: 24px
    font-weight: 400
    //padding: 16px 0
    transition: all 0.3s ease
    border-bottom: 1px solid transparent
    text-align: center
    width: 100%
    
    &:hover
      color: #e50914
      border-bottom-color: #e50914
    
    &.router-link-active
      color: #e50914
      font-weight: 500
      border-bottom-color: #e50914

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
