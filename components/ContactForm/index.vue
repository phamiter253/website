<script setup lang="ts">
import { validationRules } from '~/composables/useForm'
import type { ContactFormData } from '~/types'

// Form configuration
const initialValues: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const formValidationRules = {
  name: [validationRules.required('Name is required')],
  email: [
    validationRules.required('Email is required'),
    validationRules.email('Please enter a valid email address')
  ],
  subject: [validationRules.required('Subject is required')],
  message: [
    validationRules.required('Message is required'),
    validationRules.minLength(10, 'Message must be at least 10 characters')
  ]
}

// Use form composable
const {
  values,
  errors,
  isValid,
  isSubmitting,
  setTouched,
  handleSubmit,
  reset
} = useForm({
  initialValues,
  validationRules: formValidationRules,
  validateOnBlur: true
})

// Thank you modal state
const showThankYouModal = ref(false)

// Form submission handler
const onSubmit = async(formData: ContactFormData) => {
  try {
    const formDataToSend = new FormData()

    // Add form fields
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value)
    })

    await $fetch('https://formeezy.com/api/v1/forms/67972c7758208a0008474679/submissions', {
      method: 'POST',
      body: formDataToSend
    })

    // Show thank you modal instead of redirecting
    showThankYouModal.value = true

    // Reset form after successful submission
    reset()

  } catch (error: unknown) {
    console.error('Form submission error:', error)

    // Show thank you modal even on error (form services often redirect on success)
    showThankYouModal.value = true
    reset()
  }
}

// Handle form submission
const submitForm = async() => {
  await handleSubmit(onSubmit)
}

// Handle modal close
const handleModalClose = () => {
  showThankYouModal.value = false
}
</script>

<template lang="pug">
  .contact-form
    .container
      .contact-form__column
        .contact-form__title-container
          h1.contact-form__title Get In<br>Touch!

      .contact-form__column
        form.contact-form__form(@submit.prevent="submitForm")
          BaseInput(
            v-model="values.name"
            type="text"
            label="Name"
            placeholder="Your full name"
            required
            :error-message="errors.name"
            @blur="setTouched('name')"
          )

          BaseInput(
            v-model="values.email"
            type="email"
            label="Email"
            placeholder="your.email@example.com"
            required
            :error-message="errors.email"
            @blur="setTouched('email')"
          )

          BaseInput(
            v-model="values.subject"
            type="text"
            label="Subject"
            placeholder="What's this about?"
            required
            :error-message="errors.subject"
            @blur="setTouched('subject')"
          )

          BaseInput(
            v-model="values.message"
            label="Message"
            placeholder="Tell me more about your project or question..."
            multiline
            :rows="5"
            required
            :error-message="errors.message"
            @blur="setTouched('message')"
          )

          // Honeypot field for spam protection
          input.bot-field(
            name="bot-field"
            type="text"
            tabindex="-1"
            aria-hidden="true"
          )

          BaseButton.contact-form__submit(
            type="submit"
            variant="primary"
            size="large"
            :loading="isSubmitting"
            :disabled="!isValid || isSubmitting"
            block
          ) {{ isSubmitting ? 'Sending...' : 'Send Message' }}

    // Thank you modal
    ThankYouModal(
      v-model="showThankYouModal"
      @close="handleModalClose"
    )
</template>

<style lang="sass" src="./index.sass"></style>
