# Component Structure Guidelines

## Directory Structure

Each component should follow this structure:

```
components/
├── ComponentName/
│   ├── index.vue          # Main component file
│   ├── index.sass         # Component-specific styles
│   └── ComponentName.stories.js  # Storybook stories (if applicable)
```

## Component File Structure

### Template Section
```vue
<template lang="pug">
  .component-name
    .component-name__header
      h2.component-name__title {{ title }}
    .component-name__content
      slot
</template>
```

### Script Section
```vue
<script setup lang="ts">
// Props definition
interface Props {
  title: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: ''
})

// Composables
const { $gsap } = useNuxtApp()

// Reactive data
const isVisible = ref(false)

// Computed properties
const computedClasses = computed(() => ({
  'component-name--visible': isVisible.value
}))

// Methods
const handleClick = () => {
  isVisible.value = !isVisible.value
}

// Lifecycle hooks
onMounted(() => {
  // Animation setup
})
</script>
```

### Style Section
```vue
<style lang="sass" src="./index.sass"></style>
```

## SASS Structure

```sass
// Component: ComponentName
// Description: Brief description of what this component does

.component-name
  // Base styles
  display: flex
  flex-direction: column
  
  // Modifiers
  &--visible
    opacity: 1
    
  // Elements
  &__header
    padding: 1rem
    
  &__title
    font-size: var(--fluid-18-32)
    margin: 0
    
  &__content
    flex: 1
    
  // States
  &:hover
    transform: translateY(-2px)
    
  // Responsive
  @media (max-width: 768px)
    padding: 0.5rem
```

## Naming Conventions

### Components
- Use PascalCase: `MyComponent`
- Be descriptive: `MovieCard` not `Card`
- Avoid generic names: `UserProfile` not `Profile`

### Props
- Use camelCase: `backgroundColor`
- Be specific: `isLoading` not `loading`
- Use boolean prefixes: `is`, `has`, `can`, `should`

### Events
- Use kebab-case: `user-selected`
- Be descriptive: `item-clicked` not `click`

### CSS Classes
- Use BEM methodology: `.block__element--modifier`
- Component prefix: `.movie-card__title`
- State classes: `.movie-card--loading`

## Component Types

### 1. Layout Components
- Handle page structure
- Examples: `TheHeader`, `TheFooter`, `TheNavigation`
- Should be framework components

### 2. UI Components
- Reusable interface elements
- Examples: `BaseButton`, `BaseCard`, `BaseModal`
- Should be generic and configurable

### 3. Feature Components
- Business logic components
- Examples: `MovieGrid`, `ContactForm`, `ProjectCarousel`
- Can be specific to project needs

### 4. Page Components
- Top-level page components
- Should be in `pages/` directory
- Handle data fetching and page-level state

## Best Practices

### Props
```vue
// Good - with defaults and types
interface Props {
  title: string
  items: Movie[]
  isVisible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isVisible: true
})

// Avoid - no types or validation
const props = defineProps(['title', 'items', 'isVisible'])
```

### Emits
```vue
// Good - typed events
interface Emits {
  (e: 'item-selected', item: Movie): void
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

// Usage
emit('item-selected', selectedMovie)
```

### Slots
```vue
<template>
  <div class="card">
    <header class="card__header">
      <slot name="header" />
    </header>
    <main class="card__content">
      <slot />
    </main>
    <footer class="card__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
```

### Composables Usage
```vue
<script setup>
// Import composables at the top
const { gsap } = useGsap()
const { isLoading, setLoading } = useLoading()

// Use composables for reusable logic
const { data: movies } = await useFetch('/api/movies')
</script>
```

## Performance Guidelines

### 1. Lazy Loading
```vue
<!-- For heavy components -->
<LazyMovieGrid v-if="shouldShowGrid" />
```

### 2. Computed Properties
```vue
<script setup>
// Good - cached computation
const filteredItems = computed(() => 
  items.value.filter(item => item.visible)
)

// Avoid - recalculates on every render
const getFilteredItems = () => items.value.filter(item => item.visible)
</script>
```

### 3. Event Handling
```vue
<script setup>
// Good - stable reference
const handleClick = (item: Movie) => {
  emit('item-selected', item)
}

// Avoid - new function on every render
// @click="(item) => emit('item-selected', item)"
</script>
```

## Accessibility Guidelines

### 1. Semantic HTML
```vue
<template>
  <article class="movie-card">
    <header>
      <h3>{{ movie.title }}</h3>
    </header>
    <main>
      <p>{{ movie.overview }}</p>
    </main>
  </article>
</template>
```

### 2. ARIA Labels
```vue
<template>
  <button 
    :aria-label="`Select ${movie.title}`"
    @click="selectMovie"
  >
    <img :alt="movie.title" :src="movie.poster" />
  </button>
</template>
```

### 3. Keyboard Navigation
```vue
<script setup>
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    handleSelect()
  }
}
</script>

<template>
  <div 
    tabindex="0" 
    @keydown="handleKeydown"
    @click="handleSelect"
  >
    <!-- Content -->
  </div>
</template>
```

## Testing Considerations

### 1. Component Props
- Test with required props
- Test with optional props
- Test prop validation

### 2. Events
- Test event emissions
- Test event handlers

### 3. Slots
- Test default slot content
- Test named slots
- Test slot fallbacks

### 4. Responsive Behavior
- Test on different screen sizes
- Test touch interactions
- Test keyboard navigation
