<script setup lang="ts">
import type { NavigationItem } from '~/types'

// Import navigation data
import { router } from '~/utils/router'

// Use scroll composable for better scroll handling
const { isScrolled } = useScroll({ throttle: 16 })

// Use modal composable for drawer state management
const { isOpen, close, toggle } = useModal()

// Navigation items with proper typing
const navigationItems = router as NavigationItem[]

// Computed classes for navigation state
const navigationClasses = computed(() => ({
  active: isScrolled.value,
  open: isOpen.value
}))

// Handle drawer toggle with proper accessibility
const toggleDrawer = () => {
  toggle()
}

// Close drawer when clicking on a navigation link
const handleLinkClick = () => {
  close()
}

// Handle escape key to close drawer
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    close()
  }
}

// Prevent body scroll when mobile menu is open
watch(isOpen, (newValue) => {
  if (import.meta.client) {
    if (newValue) {
      document.body.classList.add('stop-scroll')
    } else {
      document.body.classList.remove('stop-scroll')
    }
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  // Clean up body class
  if (import.meta.client) {
    document.body.classList.remove('stop-scroll')
  }
})
</script>

<template lang="pug">
header.navigation(
  :class="navigationClasses"
  role="banner"
)
  .container
    .navigation__container
      button.navigation__toggle(
        type="button"
        aria-label="Toggle navigation menu"
        :aria-expanded="isOpen"
        aria-controls="navigation__drawer"
        @click="toggleDrawer"
      )
        img.navigation__logo(
          src="/logo.svg"
          alt="Priscilla Hamiter Logo"
          width="65"
          height="65"
        )

      nav.navigation__drawer(
        :class="{ open: isOpen }"
        :aria-hidden="!isOpen"
        id="navigation__drawer"
        role="navigation"
        aria-label="Main navigation"
      )
        ul.navigation__links(role="list")
          li.navigation__link-item(
            v-for="(page, i) in navigationItems"
            :key="`nav-link-${page.name}-${i}`"
            role="listitem"
          )
            NuxtLink.navigation__link(
              :to="page.path"
              @click="handleLinkClick"
              :aria-current="$route.path === page.path ? 'page' : undefined"
            ) {{ page.name }}
</template>

<style lang="sass" src="./index.sass"></style>
