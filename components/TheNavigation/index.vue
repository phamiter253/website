<script setup>
  const isDown = ref(false)
  
  function handleScroll() {
    const currentScrollPosition = window.scrollY
    isDown.value = currentScrollPosition > 10 ? true : false
  }; 
  onMounted(() => {
    window.addEventListener('scroll', () => {
      handleScroll()
    });
  });
</script>

<template lang="pug">
  header.navigation(:class="{ active: isDown }")
    .container
      .navigation__container
        NuxtLink(to='/' aria-label='Home')
          img.navigation__logo(src='/logo.svg' alt='Priscilla Hamiter Logo')
</template>

<style lang="sass" src="./index.sass"></style>
