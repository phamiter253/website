<template lang="pug">
  Teleport(to="body")
    .base-modal(v-if="isOpen" @click.self="handleBackdropClick")
      .base-modal__container(:class="modalClasses")
        .base-modal__header(v-if="$slots.header || title")
          slot(name="header")
            h2.base-modal__title(v-if="title") {{ title }}
          button.base-modal__close(
            type="button"
            :aria-label="closeLabel"
            @click="handleClose"
          )
            svg(width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2")
              path(d="M18 6L6 18M6 6l12 12")

        .base-modal__content
          button.base-modal__close(
            type="button"
            :aria-label="closeLabel"
            @click="handleClose"
          )
            svg(width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2")
              path(d="M18 6L6 18M6 6l12 12")
          slot

        .base-modal__footer(v-if="$slots.footer")
          slot(name="footer")
</template>

<script setup lang="ts">
interface Props {
  /** Whether modal is open */
  modelValue: boolean
  /** Modal title */
  title?: string
  /** Modal size */
  size?: 'small' | 'medium' | 'large' | 'full'
  /** Whether clicking backdrop closes modal */
  closeOnBackdrop?: boolean
  /** Whether pressing escape closes modal */
  closeOnEscape?: boolean
  /** Close button aria label */
  closeLabel?: string
  /** Prevent body scroll when modal is open */
  lockScroll?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
  (e: 'open'): void
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  closeOnBackdrop: true,
  closeOnEscape: true,
  closeLabel: 'Close modal',
  lockScroll: true
})

const emit = defineEmits<Emits>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const modalClasses = computed(() => [
  `base-modal__container--${props.size}`
])

const handleClose = () => {
  isOpen.value = false
  emit('close')
}

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    handleClose()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEscape && isOpen.value) {
    handleClose()
  }
}

// Lock body scroll when modal is open
watch(isOpen, (newValue) => {
  if (props.lockScroll) {
    if (newValue) {
      document.body.style.overflow = 'hidden'
      emit('open')
    } else {
      document.body.style.overflow = ''
    }
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  if (props.lockScroll) {
    document.body.style.overflow = ''
  }
})
</script>

<style lang="sass" src="./index.sass"></style>
