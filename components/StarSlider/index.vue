<template lang="pug">
.star-slider
  .star-container
    // Star mask for the slides
    //h2 {{ title }}
    .star-mask
      .slide-content(
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
        :style="{ backgroundImage: `url(${slide.image})` }"
      )
        //- .slide-overlay
        //-   h3 {{ slide.title }}
    
    // Indicator dots positioned between star points
    .indicators
      .indicator-dot(
        v-for="(slide, index) in slides"
        :key="`dot-${index}`"
        :class="{ active: currentSlide === index }"
        :style="getIndicatorStyle(index)"
        @click="goToSlide(index)"
      )
  

</template>

<script setup>
import { ref } from 'vue'

// Define props
const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => []
  },
  title: {
    type: String,
    required: true,
    default: ''
  }
})

const currentSlide = ref(0)

// Calculate positions for indicator dots between star points
const getIndicatorStyle = (index) => {
  const totalSlides = props.slides.length
  const angle = (index * 360 / totalSlides) + 22.5 // Offset by 22.5° to place between points
  const radius = 160 // Distance from center
  const x = Math.cos((angle - 90) * Math.PI / 180) * radius
  const y = Math.sin((angle - 90) * Math.PI / 180) * radius
  
  return {
    transform: `translate(${x}px, ${y}px)`
  }
}

// Generate arc path for text to follow
const getArcPath = () => {
  const radius = 80
  const startAngle = -30 * Math.PI / 180
  const endAngle = 30 * Math.PI / 180
  
  const x1 = 100 + radius * Math.cos(startAngle)
  const y1 = 100 + radius * Math.sin(startAngle)
  const x2 = 100 + radius * Math.cos(endAngle)
  const y2 = 100 + radius * Math.sin(endAngle)
  
  return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`
}

const goToSlide = (index) => {
  currentSlide.value = index
}


</script>

<style lang="sass" src="./index.sass" scoped></style> 
