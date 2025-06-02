<script setup>
const { gsap } = useGsap();

const currentIndex = ref(0)
const slides = ref([])

const goToSlide = (index, direction) => {
  const prevIndex = currentIndex.value
  const slideDirection = direction > 0 ? 1 : -1 // Right or Left

  // Ensure cycling order (loop slides forward and backward)
  currentIndex.value = (index + slides.value.length) % slides.value.length

  const tl = gsap.timeline()

  tl.to(slides.value[prevIndex], {
    x: -100 * slideDirection + '%',
    duration: 0.5,
    ease: 'power2.inOut'
  })
    .set(slides.value[prevIndex], { display: 'none' })
    .set(slides.value[currentIndex.value], { display: 'block', x: 100 * slideDirection + '%' })
    .to(slides.value[currentIndex.value], {
      x: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
}

onMounted(() => {
  slides.value = Array.from(document.querySelectorAll('.slider__slide'))
  slides.value.forEach((slide, i) => {
    slide.style.display = i === 0 ? 'block' : 'none'
  })
})

onUpdated(() => {
  slides.value = Array.from(document.querySelectorAll('.slider__slide'))
})
</script>

<template lang="pug">
.slider
  .slider__content
    slot
  button.slider__button.prev(@click="goToSlide(currentIndex - 1, 1)") ‹
  button.slider__button.next(@click="goToSlide(currentIndex + 1, -1)") ›
</template>

<style lang="sass" src="./index.sass"></style>
