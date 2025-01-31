<script setup>
  import { router } from '~/utils/router';

  const isDown = ref(false);
  const isOpen = ref(false);

  const handleScroll = () => {
    isDown.value = window.scrollY > 10;
  };

  const toggleDrawer = () => {
    isOpen.value = !isOpen.value;
    document.body.classList.toggle("stop-scroll", isOpen.value);
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
</script>

<template lang="pug">
  header.navigation(:class="{ active: isDown }")
    .container
      .navigation__container
        NuxtLink(to="/" aria-label="Home")
          img.navigation__logo(src="/logo.svg" alt="Priscilla Hamiter Logo")
        button.navigation__hamburger(@click="toggleDrawer")
          span
          span
          span
  button.navigation__overlay(v-if="isOpen" @click="toggleDrawer")
  .navigation__drawer(:class="{ open: isOpen }")
    button.navigation__close(@click="toggleDrawer")
      span
      span
    ul.navigation__links
      li.navigation__link-item(v-for="(page, i) in router" :key="`link-${i}`" @click="toggleDrawer")
        NuxtLink.navigation__link(:to="page.path") {{ page.name }}
</template>

<style lang="sass" src="./index.sass"></style>
