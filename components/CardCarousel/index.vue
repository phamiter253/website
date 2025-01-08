<script setup>
  const { gsap } = useGsap();
  const isActive = ref(0)
  const carouselRef = ref();

  const props = defineProps({
    slidesLength: { type: Number, default: 0 }
  })

  function setIndex(i, e) {
    e.stopPropagation(); 
    const prev = isActive.value
    const curr = i
    isActive.value = i
    
    gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      gsap.set(slides, { zIndex: 0 });
      gsap.set(slides[prev], { zIndex: 1 , xPercent: 0});
      if (curr > prev) { 
        gsap.set(slides[curr], { zIndex: 2 , xPercent: 100});
        gsap.fromTo(slides[curr], { xPercent: 100 }, { duration: 1 , xPercent: 0 }) 
      } else {
        gsap.set(slides[curr], { zIndex: 2 , xPercent: -100});
        gsap.fromTo(slides[curr], { xPercent: -100 }, { duration: 1, xPercent: 0 })
      }
    }, carouselRef.value); 
  }; 
</script>

<template lang="pug">
  .carousel
    .carousel__container
      .carousel__inner(ref="carouselRef")
        slot
      .carousel__controls
        .carousel__indicator(v-for="(dot, i) in slidesLength" :key="`dot-${i}`" :class="{ 'active-dot': isActive === i }" @click='(e) => setIndex(i, e)')
</template>

<style lang="sass" src="./index.sass"></style>
