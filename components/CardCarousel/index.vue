<script setup>
  const { gsap } = useGsap();
  const isActive = ref(0)
  const carouselRef = ref();
  var slideDelay = 1.5;
  var slideDuration = 0.3;
  var snapX;

  const props = defineProps({
    slidesLength: { type: Number, default: 0 }
  })

  function setIndex(curr, e) {
    e.stopPropagation(); 
    const prev = isActive.value
    isActive.value = curr
    
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      
      if (curr > prev) { 
        gsap.set(slides[prev], { zIndex: 0 },{xPercent: 0, zIndex: 0 });
        gsap.fromTo(slides[curr], { xPercent: 100, zIndex: 0 }, { duration: 1, xPercent: -1*curr *100, zIndex: 2 }) 
      } else {
        gsap.set(slides[prev], { zIndex: 0 }, { xPercent: -1*prev*100, zIndex: 0 });
        gsap.fromTo(slides[curr], { xPercent: -1*(curr+1)*100 , zIndex: 0}, { duration: 1, xPercent: -1*curr*100, zIndex: 2 })
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
        .carousel__indicator(v-for="(num, i) in slidesLength" :key="`dot-${i}`" :class="{ 'active-dot': isActive === i }" @click='(e) => setIndex(i, e)')
</template>

<style lang="sass" src="./index.sass"></style>
