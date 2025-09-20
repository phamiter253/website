<template>
  <svg
    :width="size"
    :height="size"
    viewBox="-100 -100 200 200"
    :fill="fill"
    :class="iconClass"
    :aria-label="ariaLabel"
    role="img"
  >
    <polygon
      :points="starPoints"
      :stroke="stroke"
      :stroke-width="strokeWidth"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  /** Icon size in pixels */
  size?: number | string
  /** Fill color */
  fill?: string
  /** Stroke color */
  stroke?: string
  /** Stroke width */
  strokeWidth?: number
  /** Additional CSS class */
  class?: string
  /** Accessibility label */
  ariaLabel?: string
  /** Number of star points */
  points?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  fill: 'currentColor',
  stroke: 'none',
  strokeWidth: 0,
  ariaLabel: 'Star',
  points: 8
})

const iconClass = computed(() => [
  'icon-star',
  props.class
])

// Generate star points based on number of points
const starPoints = computed(() => {
  const points = props.points
  const outerRadius = 100
  const innerRadius = 25
  let path = ''

  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2
    const radius = i % 2 === 0 ? outerRadius : innerRadius
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    path += `${x},${y} `
  }

  return path.trim()
})
</script>

<style lang="sass">
.icon-star
  display: inline-block
  vertical-align: middle
  flex-shrink: 0
</style>
