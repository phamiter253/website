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
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template lang="pug">
header.navigation(:class="{ active: isDown, open: isOpen }")
  .container
    .navigation__container
      button(
        aria-label="Toggle menu"
        :aria-expanded="isOpen"
        aria-controls="navigation__drawer"
        @click="toggleDrawer"
      )
        img.navigation__logo(src="/logo.svg" alt="Priscilla Hamiter Logo")
      .navigation__drawer(:class="{ open: isOpen }")
        ul.navigation__links
          li.navigation__link-item(v-for="(page, i) in router" :key="`link-${i}`" @click="toggleDrawer")
            NuxtLink.navigation__link(:to="page.path") {{ page.name }}
</template>

<style lang="sass" src="./index.sass"></style>
