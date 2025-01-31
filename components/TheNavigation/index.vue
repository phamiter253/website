<script setup>
import { router } from '~/utils/router';

const isDown = ref(false);
const isOpen = ref(false);

let scrollTimeout = null;
const debounce = (fn, delay) => {
  return () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(fn, delay);
  };
};

const handleScroll = debounce(() => {
  isDown.value = window.scrollY > 10;
}, 10);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
  const body = document.body;

  if (isOpen.value) {
    !body.classList.contains("stop-scroll") && body.classList.add("stop-scroll");
  } else {
    body.classList.remove("stop-scroll");
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template lang="pug">
header.navigation(:class="{ active: isDown }")
  .container
    .navigation__container
      NuxtLink(to="/" aria-label="Home")
        img.navigation__logo(src="/logo.svg" alt="Priscilla Hamiter Logo")
      button.navigation__hamburger(
        aria-label="Open menu"
        :aria-expanded="{ isOpen }"
        aria-controls="menu"
        @click="toggleDrawer"
      )
        span
        span
        span
  button.navigation__overlay(v-if="isOpen" @click="toggleDrawer")
  .navigation__drawer(:class="{ open: isOpen }")
    button.navigation__close(
      aria-label="Close menu"
      @click="toggleDrawer"
    )
      span
      span
    ul.navigation__links
      li.navigation__link-item(v-for="(page, i) in router.slice(1)" :key="`link-${i}`" @click="toggleDrawer")
        NuxtLink.navigation__link(:to="page.path") {{ page.name }}
</template>

<style lang="sass" src="./index.sass"></style>
