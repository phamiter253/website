<template lang="pug">
  component.base-button(
    :is="tag"
    :type="type"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :class="buttonClasses"
    v-bind="linkProps"
    @click="handleClick"
  )
    slot(name="icon-left")
    span.base-button__content(v-if="$slots.default")
      slot
    span.base-button__text(v-else-if="text") {{ text }}
    slot(name="icon-right")
</template>

<script setup lang="ts">
interface Props {
  /** Button text content */
  text?: string
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  /** Button size */
  size?: 'small' | 'medium' | 'large'
  /** Button type for form submission */
  type?: 'button' | 'submit' | 'reset'
  /** Whether button is disabled */
  disabled?: boolean
  /** Loading state */
  loading?: boolean
  /** Full width button */
  block?: boolean
  /** Render as link (NuxtLink or external) */
  to?: string
  /** External link href */
  href?: string
  /** Accessibility label */
  ariaLabel?: string
}

interface Emits {
  (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  disabled: false,
  loading: false,
  block: false
})

const emit = defineEmits<Emits>()

// Determine the component tag to render
const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

// Props for link components
const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href }
  return {}
})

// Dynamic classes based on props
const buttonClasses = computed(() => [
  `base-button--${props.variant}`,
  `base-button--${props.size}`,
  {
    'base-button--disabled': props.disabled,
    'base-button--loading': props.loading,
    'base-button--block': props.block
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
