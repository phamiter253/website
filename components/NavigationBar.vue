<template lang="pug">
header.navigation(:class="{ active: isDown }")
  .container
    .navigation__container
      img.navigation__logo(src='/logo.svg' alt='Logo')
</template>
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

<style lang="sass">
.navigation
  position: sticky
  top: 0
  overflow: hidden
  background-color: #D6DAC8
  // box-shadow: 0 4px 10px 0 rgba(0,0,0,.04),0 3px 16px -4px rgba(0,0,0,.03)
  width: 100%
  z-index: 9999

  &.active
    box-shadow: 0 4px 10px 0 rgba(0,0,0,.06),0 3px 16px -4px rgba(0,0,0,.03)

  &__container
    display: 100%
    justify-content: space-between
    padding: .5rem 0
    width: 100%
    
  &__logo
    &
      width: auto
      height: 60px

    @media screen and (max-width: 768px)
      height: 40px
</style>
