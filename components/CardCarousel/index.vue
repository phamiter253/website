<script setup>
  const { gsap } = useGsap();
  const isActive = ref(0);
  const carouselRef = ref();

  const props = defineProps({
    slidesLength: { type: Number, default: 0 }
  });

  const setIndex = (i, e) => {
    if (i === isActive.value) {
      return
    }
    e.preventDefault();
    e.stopPropagation(); 
   
    const prev = isActive.value;
    isActive.value = i;

    gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");

      gsap.set(slides, { zIndex: 0 });
      gsap.set(slides[prev], { zIndex: 1, xPercent: 0 });

      const direction = i > prev ? 100 : -100;
      gsap.set(slides[i], { zIndex: 2, xPercent: direction });
      gsap.fromTo(
        slides[i],
        { xPercent: direction },
        { duration: 1, xPercent: 0 }
      );
    }, carouselRef.value); 
  };
</script>

<template lang="pug">
  .carousel
    .carousel__container
      .carousel__inner(ref="carouselRef")
        slot
      .carousel__controls
        .carousel__indicator(v-for="(dot, i) in slidesLength" 
          :key="`dot-${i}`" 
          :class="{ 'active-dot': isActive === i }" 
          @click="(e) => setIndex(i, e)" 
          @keyup.enter="(e) => setIndex(i, e)" 
          tabindex='0')
</template>

<style lang="sass" src="./index.sass"></style>
