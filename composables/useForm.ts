import { ref, reactive, computed } from 'vue'

export interface ValidationRule {
  validator: (value: any) => boolean
  message: string
}

export interface FormField {
  value: any
  rules?: ValidationRule[]
  touched?: boolean
  error?: string
}

export interface UseFormOptions<T> {
  initialValues: T
  validationRules?: Partial<Record<keyof T, ValidationRule[]>>
  validateOnChange?: boolean
  validateOnBlur?: boolean
}

export interface UseFormReturn<T> {
  /** Form values */
  values: T
  /** Form errors */
  errors: Ref<Partial<Record<keyof T, string>>>
  /** Whether form is valid */
  isValid: Ref<boolean>
  /** Whether form is submitting */
  isSubmitting: Ref<boolean>
  /** Touched fields */
  touched: Ref<Partial<Record<keyof T, boolean>>>
  /** Set field value */
  setValue: (field: keyof T, value: any) => void
  /** Set field error */
  setError: (field: keyof T, error: string) => void
  /** Clear field error */
  clearError: (field: keyof T) => void
  /** Clear all errors */
  clearErrors: () => void
  /** Validate single field */
  validateField: (field: keyof T) => boolean
  /** Validate all fields */
  validate: () => boolean
  /** Mark field as touched */
  setTouched: (field: keyof T, touched?: boolean) => void
  /** Reset form to initial values */
  reset: () => void
  /** Handle form submission */
  handleSubmit: (onSubmit: (values: T) => Promise<void> | void) => Promise<void>
}

export function useForm<T extends Record<string, any>>(
  options: UseFormOptions<T>
): UseFormReturn<T> {
  const {
    initialValues,
    validationRules = {},
    validateOnChange = false,
    validateOnBlur = true
  } = options

  const values = reactive<T>({ ...initialValues })
  const errors = ref<Partial<Record<keyof T, string>>>({})
  const touched = ref<Partial<Record<keyof T, boolean>>>({})
  const isSubmitting = ref(false)

  const isValid = computed(() => {
    return Object.keys(errors.value).length === 0
  })

  const validateField = (field: keyof T): boolean => {
    const rules = validationRules[field]
    if (!rules) return true

    const value = values[field]

    for (const rule of rules) {
      if (!rule.validator(value)) {
        setError(field, rule.message)
        return false
      }
    }

    clearError(field)
    return true
  }

  const validate = (): boolean => {
    let isFormValid = true

    for (const field in validationRules) {
      if (!validateField(field)) {
        isFormValid = false
      }
    }

    return isFormValid
  }

  const setValue = (field: keyof T, value: any) => {
    values[field] = value

    if (validateOnChange) {
      validateField(field)
    }
  }

  const setError = (field: keyof T, error: string) => {
    errors.value = { ...errors.value, [field]: error }
  }

  const clearError = (field: keyof T) => {
    const newErrors = { ...errors.value }
    delete newErrors[field]
    errors.value = newErrors
  }

  const clearErrors = () => {
    errors.value = {}
  }

  const setTouched = (field: keyof T, isTouched = true) => {
    touched.value = { ...touched.value, [field]: isTouched }

    if (isTouched && validateOnBlur) {
      validateField(field)
    }
  }

  const reset = () => {
    Object.assign(values, initialValues)
    errors.value = {}
    touched.value = {}
    isSubmitting.value = false
  }

  const handleSubmit = async(onSubmit: (values: T) => Promise<void> | void) => {
    // Mark all fields as touched
    for (const field in values) {
      setTouched(field, true)
    }

    // Validate all fields
    if (!validate()) {
      return
    }

    isSubmitting.value = true

    try {
      await onSubmit(values)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    values,
    errors: readonly(errors),
    isValid: readonly(isValid),
    isSubmitting: readonly(isSubmitting),
    touched: readonly(touched),
    setValue,
    setError,
    clearError,
    clearErrors,
    validateField,
    validate,
    setTouched,
    reset,
    handleSubmit
  }
}

// Common validation rules
export const validationRules = {
  required: (message = 'This field is required'): ValidationRule => ({
    validator: (value: any) => {
      if (typeof value === 'string') return value.trim().length > 0
      return value !== null && value !== undefined && value !== ''
    },
    message
  }),

  email: (message = 'Please enter a valid email address'): ValidationRule => ({
    validator: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !value || emailRegex.test(value)
    },
    message
  }),

  minLength: (min: number, message?: string): ValidationRule => ({
    validator: (value: string) => !value || value.length >= min,
    message: message || `Must be at least ${min} characters`
  }),

  maxLength: (max: number, message?: string): ValidationRule => ({
    validator: (value: string) => !value || value.length <= max,
    message: message || `Must be no more than ${max} characters`
  }),

  pattern: (regex: RegExp, message = 'Invalid format'): ValidationRule => ({
    validator: (value: string) => !value || regex.test(value),
    message
  })
}
