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
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  /** Icon size in pixels */
  size?: number | string
  /** Stroke width */
  strokeWidth?: number
  /** Additional CSS class */
  class?: string
  /** Accessibility label */
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  strokeWidth: 2,
  ariaLabel: 'Close'
})

const iconClass = computed(() => [
  'icon-close',
  props.class
])
</script>

<style lang="sass">
.icon-close
  display: inline-block
  vertical-align: middle
  flex-shrink: 0
</style>
