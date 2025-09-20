# Component Library Documentation

## Base Components

### BaseButton

A versatile button component with multiple variants and states.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Button text content |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'link'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type for forms |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `loading` | `boolean` | `false` | Loading state |
| `block` | `boolean` | `false` | Full width button |
| `to` | `string` | - | NuxtLink destination |
| `href` | `string` | - | External link URL |
| `ariaLabel` | `string` | - | Accessibility label |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted when button is clicked |

#### Usage

```vue
<template>
  <BaseButton 
    variant="primary" 
    size="large" 
    @click="handleClick"
  >
    Click me
  </BaseButton>
  
  <BaseButton 
    variant="secondary" 
    to="/about"
  >
    Learn More
  </BaseButton>
  
  <BaseButton 
    variant="ghost" 
    :loading="isSubmitting"
    :disabled="!isValid"
  >
    Submit
  </BaseButton>
</template>
```

---

### BaseCard

A flexible card component for displaying content with various layouts.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `image` | `string` | - | Card image source |
| `imageAlt` | `string` | - | Image alt text |
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'flat'` | `'default'` | Card style variant |
| `clickable` | `boolean` | `false` | Whether card is clickable |
| `disabled` | `boolean` | `false` | Whether card is disabled |
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Card padding size |

#### Slots

| Slot | Description |
|------|-------------|
| `default` | Main card content |
| `header` | Card header content |
| `media` | Media content (images, videos) |
| `footer` | Card footer content |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted when card is clicked (if clickable) |

#### Usage

```vue
<template>
  <BaseCard 
    title="Project Title"
    subtitle="Project description"
    image="/images/project.jpg"
    variant="elevated"
    clickable
    @click="openProject"
  >
    <p>Project details go here...</p>
    
    <template #footer>
      <BaseButton variant="primary">View Project</BaseButton>
    </template>
  </BaseCard>
</template>
```

---

### BaseModal

A modal dialog component with customizable content and behavior.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Whether modal is open |
| `title` | `string` | - | Modal title |
| `size` | `'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Modal size |
| `closeOnBackdrop` | `boolean` | `true` | Close modal when clicking backdrop |
| `closeOnEscape` | `boolean` | `true` | Close modal when pressing escape |
| `closeLabel` | `string` | `'Close modal'` | Close button aria label |
| `lockScroll` | `boolean` | `true` | Prevent body scroll when open |

#### Slots

| Slot | Description |
|------|-------------|
| `default` | Main modal content |
| `header` | Modal header content |
| `footer` | Modal footer content |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Emitted when modal state changes |
| `close` | - | Emitted when modal is closed |
| `open` | - | Emitted when modal is opened |

#### Usage

```vue
<template>
  <BaseModal 
    v-model="isModalOpen"
    title="Confirm Action"
    size="small"
  >
    <p>Are you sure you want to continue?</p>
    
    <template #footer>
      <BaseButton variant="ghost" @click="isModalOpen = false">
        Cancel
      </BaseButton>
      <BaseButton variant="primary" @click="confirmAction">
        Confirm
      </BaseButton>
    </template>
  </BaseModal>
</template>
```

---

### BaseInput

A comprehensive input component supporting various input types and states.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number` | - | Input value |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Input type |
| `label` | `string` | - | Input label |
| `placeholder` | `string` | - | Input placeholder |
| `helpText` | `string` | - | Help text |
| `errorMessage` | `string` | - | Error message |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `variant` | `'default' \| 'outlined' \| 'filled'` | `'default'` | Input variant |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `readonly` | `boolean` | `false` | Whether input is readonly |
| `required` | `boolean` | `false` | Whether input is required |
| `multiline` | `boolean` | `false` | Whether to use textarea |
| `rows` | `number` | `3` | Textarea rows (when multiline) |

#### Slots

| Slot | Description |
|------|-------------|
| `iconLeft` | Left icon content |
| `iconRight` | Right icon content |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string \| number` | Emitted when value changes |
| `blur` | `FocusEvent` | Emitted when input loses focus |
| `focus` | `FocusEvent` | Emitted when input gains focus |

#### Usage

```vue
<template>
  <BaseInput
    v-model="email"
    type="email"
    label="Email Address"
    placeholder="your@email.com"
    required
    :error-message="emailError"
  >
    <template #iconLeft>
      <IconEmail />
    </template>
  </BaseInput>
  
  <BaseInput
    v-model="message"
    label="Message"
    multiline
    :rows="5"
    help-text="Tell us about your project"
  />
</template>
```

---

## Icon Components

### IconClose

A close/X icon component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `strokeWidth` | `number` | `2` | Stroke width |
| `class` | `string` | - | Additional CSS class |
| `ariaLabel` | `string` | `'Close'` | Accessibility label |

### IconStar

A customizable star icon component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `fill` | `string` | `'currentColor'` | Fill color |
| `stroke` | `string` | `'none'` | Stroke color |
| `strokeWidth` | `number` | `0` | Stroke width |
| `class` | `string` | - | Additional CSS class |
| `ariaLabel` | `string` | `'Star'` | Accessibility label |
| `points` | `number` | `8` | Number of star points |

### IconArrow

A directional arrow icon component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `strokeWidth` | `number` | `2` | Stroke width |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'right'` | Arrow direction |
| `class` | `string` | - | Additional CSS class |
| `ariaLabel` | `string` | - | Accessibility label |

---

## Composables

### useScroll

Reactive scroll position and utilities.

#### Options

```typescript
interface UseScrollOptions {
  throttle?: number // Throttle delay in milliseconds (default: 16)
  target?: HTMLElement | Window // Element to listen for scroll (default: window)
}
```

#### Returns

```typescript
interface UseScrollReturn {
  scrollY: Ref<number> // Current scroll Y position
  scrollX: Ref<number> // Current scroll X position
  isScrollingDown: Ref<boolean> // Whether scrolling down
  isScrollingUp: Ref<boolean> // Whether scrolling up
  isScrolled: Ref<boolean> // Whether scrolled past threshold
  scrollToTop: () => void // Scroll to top smoothly
  scrollToElement: (element: HTMLElement | string, offset?: number) => void
}
```

#### Usage

```vue
<script setup>
const { scrollY, isScrolled, scrollToTop } = useScroll()

// Use in template
const headerClasses = computed(() => ({
  'header--scrolled': isScrolled.value
}))
</script>
```

### useModal

Modal state management.

#### Returns

```typescript
interface UseModalReturn {
  isOpen: Ref<boolean> // Whether modal is open
  open: () => Promise<void> // Open the modal
  close: () => Promise<void> // Close the modal
  toggle: () => Promise<void> // Toggle the modal
}
```

### useForm

Form state management and validation.

#### Options

```typescript
interface UseFormOptions<T> {
  initialValues: T
  validationRules?: Partial<Record<keyof T, ValidationRule[]>>
  validateOnChange?: boolean
  validateOnBlur?: boolean
}
```

#### Usage

```vue
<script setup>
const { values, errors, isValid, handleSubmit } = useForm({
  initialValues: { name: '', email: '' },
  validationRules: {
    name: [validationRules.required()],
    email: [validationRules.required(), validationRules.email()]
  }
})

const onSubmit = async (data) => {
  // Handle form submission
}
</script>
```

### useDevice

Device and screen information.

#### Returns

```typescript
interface UseDeviceReturn {
  isMobile: Ref<boolean> // Whether device is mobile
  isTablet: Ref<boolean> // Whether device is tablet
  isDesktop: Ref<boolean> // Whether device is desktop
  screenWidth: Ref<number> // Current screen width
  screenHeight: Ref<number> // Current screen height
  prefersReducedMotion: Ref<boolean> // Whether user prefers reduced motion
  hasTouch: Ref<boolean> // Whether device supports touch
  pixelRatio: Ref<number> // Device pixel ratio
}
```

---

## Best Practices

### Component Composition

1. **Keep components focused**: Each component should have a single responsibility
2. **Use composition over inheritance**: Prefer slots and composables over component extension
3. **Make components configurable**: Use props for customization rather than hardcoding values

### Performance

1. **Use computed properties**: For derived state that depends on reactive data
2. **Avoid inline functions**: Define event handlers as methods or refs
3. **Lazy load heavy components**: Use `<LazyComponentName>` for components not immediately visible

### Accessibility

1. **Use semantic HTML**: Choose the right HTML elements for the content
2. **Provide ARIA labels**: For interactive elements and complex components
3. **Support keyboard navigation**: Ensure all interactive elements are keyboard accessible
4. **Test with screen readers**: Verify that components work with assistive technology

### TypeScript

1. **Define clear interfaces**: For props, emits, and data structures
2. **Use generic types**: For reusable components that work with different data types
3. **Provide default values**: Using `withDefaults()` for optional props
4. **Document complex types**: Add JSDoc comments for complex interfaces
