<template lang="pug">
  .base-card(:class="cardClasses" @click="handleClick")
    .base-card__header(v-if="$slots.header || title")
      slot(name="header")
        h3.base-card__title(v-if="title") {{ title }}
        p.base-card__subtitle(v-if="subtitle") {{ subtitle }}

    .base-card__media(v-if="$slots.media || image")
      slot(name="media")
        NuxtImg.base-card__image(
          v-if="image"
          :src="image"
          :alt="imageAlt || title || 'Card image'"
          format="webp"
          loading="lazy"
        )

    .base-card__content(v-if="$slots.default")
      slot

    .base-card__footer(v-if="$slots.footer")
      slot(name="footer")
</template>

<script setup lang="ts">
interface Props {
  /** Card title */
  title?: string
  /** Card subtitle */
  subtitle?: string
  /** Card image source */
  image?: string
  /** Image alt text */
  imageAlt?: string
  /** Card variant */
  variant?: 'default' | 'elevated' | 'outlined' | 'flat'
  /** Whether card is clickable */
  clickable?: boolean
  /** Whether card is disabled */
  disabled?: boolean
  /** Card padding size */
  padding?: 'none' | 'small' | 'medium' | 'large'
}

interface Emits {
  (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  clickable: false,
  disabled: false,
  padding: 'medium'
})

const emit = defineEmits<Emits>()

const cardClasses = computed(() => [
  `base-card--${props.variant}`,
  `base-card--padding-${props.padding}`,
  {
    'base-card--clickable': props.clickable,
    'base-card--disabled': props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  if (props.clickable && !props.disabled) {
    emit('click', event)
  }
}
</script>

<style lang="sass" src="./index.sass"></style>
