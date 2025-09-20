<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="iconClass"
    :aria-label="ariaLabel"
    role="img"
    :style="rotationStyle"
  >
    <path d="M12 2l8 8-8 8M4 12h16" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  /** Icon size in pixels */
  size?: number | string
  /** Stroke width */
  strokeWidth?: number
  /** Arrow direction */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** Additional CSS class */
  class?: string
  /** Accessibility label */
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  strokeWidth: 2,
  direction: 'right'
})

const iconClass = computed(() => [
  'icon-arrow',
  `icon-arrow--${props.direction}`,
  props.class
])

const rotationStyle = computed(() => {
  const rotations = {
    up: '270deg',
    down: '90deg',
    left: '180deg',
    right: '0deg'
  }

  return {
    transform: `rotate(${rotations[props.direction]})`
  }
})

const ariaLabel = computed(() => {
  return props.ariaLabel || `Arrow pointing ${props.direction}`
})
</script>

<style lang="sass">
.icon-arrow
  display: inline-block
  vertical-align: middle
  flex-shrink: 0
  transition: transform 0.2s ease
</style>
