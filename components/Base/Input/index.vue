<template lang="pug">
  .base-input(:class="wrapperClasses")
    label.base-input__label(
      v-if="label"
      :for="inputId"
      :class="{ 'base-input__label--required': required }"
    ) {{ label }}

    .base-input__wrapper
      .base-input__icon-left(v-if="$slots.iconLeft")
        slot(name="iconLeft")

      component.base-input__field(
        :is="inputComponent"
        :id="inputId"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="inputClasses"
        :value="modelValue"
        v-bind="$attrs"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      )

      .base-input__icon-right(v-if="$slots.iconRight")
        slot(name="iconRight")

    .base-input__help(v-if="helpText && !errorMessage") {{ helpText }}
    .base-input__error(v-if="errorMessage") {{ errorMessage }}
</template>

<script setup lang="ts">
interface Props {
  /** Input value */
  modelValue: string | number
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  /** Input label */
  label?: string
  /** Input placeholder */
  placeholder?: string
  /** Help text */
  helpText?: string
  /** Error message */
  errorMessage?: string
  /** Input size */
  size?: 'small' | 'medium' | 'large'
  /** Input variant */
  variant?: 'default' | 'outlined' | 'filled'
  /** Whether input is disabled */
  disabled?: boolean
  /** Whether input is readonly */
  readonly?: boolean
  /** Whether input is required */
  required?: boolean
  /** Whether to use textarea */
  multiline?: boolean
  /** Textarea rows (when multiline) */
  rows?: number
}

interface Emits {
  (e: 'update:modelValue', value: string | number): void
  (e: 'blur', event: FocusEvent): void
  (e: 'focus', event: FocusEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'medium',
  variant: 'default',
  disabled: false,
  readonly: false,
  required: false,
  multiline: false,
  rows: 3
})

const emit = defineEmits<Emits>()

// Generate unique ID for accessibility
const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

const inputComponent = computed(() => props.multiline ? 'textarea' : 'input')

const wrapperClasses = computed(() => [
  `base-input--${props.size}`,
  `base-input--${props.variant}`,
  {
    'base-input--disabled': props.disabled,
    'base-input--readonly': props.readonly,
    'base-input--error': props.errorMessage,
    'base-input--multiline': props.multiline
  }
])

const inputClasses = computed(() => [
  'base-input__field',
  {
    'base-input__field--with-icon-left': !!useSlots().iconLeft,
    'base-input__field--with-icon-right': !!useSlots().iconRight
  }
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>

<style lang="sass" src="./index.sass"></style>
