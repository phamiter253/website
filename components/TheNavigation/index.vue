<script setup>
  const isDown = ref(false)
  
  function handleScroll() {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > 10){
      isDown.value = true
    } else {
      isDown.value = false
    }
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
        img.navigation__logo(src='/logo.svg' alt='Priscilla Hamiter Logo')
</template>

<style lang="sass" src="./index.sass"></style>
