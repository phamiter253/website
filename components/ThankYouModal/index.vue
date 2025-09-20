<template lang="pug">
  BaseModal(
    v-model="isOpen"
    size="medium"
    :close-on-backdrop="true"
    :close-on-escape="true"
  )
    .thank-you-modal__content
      .thank-you-modal__icon
        svg(width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2")
          path(d="M9 12l2 2 4-4")
          circle(cx="12" cy="12" r="10")

      h3.thank-you-modal__title Thanks for reaching out!

      p.thank-you-modal__message
        | I've received your message and will get back to you as soon as possible.
        | I'm excited to learn more about your project!
</template>

<script setup lang="ts">
interface Props {
  /** Whether modal is open */
  modelValue: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const handleClose = () => {
  isOpen.value = false
  emit('close')
}
</script>

<style lang="sass" src="./index.sass"></style>
