# Development Workflow

## Getting Started

### 1. Environment Setup
```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

### 2. Development Commands

```bash
# Development
npm run dev              # Start development server with hot reload
npm run dev --host       # Start server accessible on network

# Building
npm run build            # Build for production
npm run generate         # Generate static site
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors automatically
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Run TypeScript type checking

# Utilities
npm run clean            # Clean build artifacts and cache
npm run deploy           # Deploy to GitHub Pages
```

## Project Structure Overview

```
portfolio/
├── assets/              # Build-time assets
│   ├── fonts/          # Custom fonts
│   ├── icons/          # SVG icons
│   └── styles/         # Global SASS/SCSS
├── components/         # Vue components
│   └── [ComponentName]/
│       ├── index.vue   # Component file
│       └── index.sass  # Component styles
├── composables/        # Vue composables
├── docs/              # Project documentation
├── layouts/           # Nuxt layouts
├── pages/             # File-based routing
├── plugins/           # Nuxt plugins
├── public/            # Static assets
│   └── images/        # Image assets
├── server/            # Server-side code
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

## Code Quality Standards

### 1. ESLint Rules
- Vue.js best practices
- TypeScript strict mode
- Accessibility guidelines
- Performance optimizations

### 2. Prettier Formatting
- 2-space indentation
- Single quotes
- No semicolons
- 100 character line limit

### 3. Commit Conventions
Follow conventional commits:
```
feat: add new movie filtering feature
fix: resolve mobile navigation issue
docs: update component guidelines
style: format SASS files
refactor: optimize image loading
perf: improve animation performance
test: add unit tests for MovieCard
chore: update dependencies
```

## Component Development

### 1. Creating a New Component
```bash
# Create component directory
mkdir components/MyNewComponent

# Create files
touch components/MyNewComponent/index.vue
touch components/MyNewComponent/index.sass
```

### 2. Component Template
```vue
<template lang="pug">
  .my-new-component
    // Component content
</template>

<script setup lang="ts">
// Component logic
</script>

<style lang="sass" src="./index.sass"></style>
```

### 3. Component Styles
```sass
// Component: MyNewComponent
.my-new-component
  // Styles here
```

## Asset Management

### 1. Images
- Place in `public/images/[category]/`
- Use descriptive names
- Optimize before adding
- Use NuxtImg component for optimization

### 2. Fonts
- Add to `assets/fonts/`
- Update `_fonts.sass` with @font-face
- Document usage in component styles

### 3. Icons
- SVG icons in `assets/icons/`
- Use semantic names
- Optimize SVG code

## Performance Guidelines

### 1. Image Optimization
```vue
<!-- Use NuxtImg for automatic optimization -->
<NuxtImg
  src="/images/projects/project-01.jpg"
  alt="Project description"
  width="800"
  height="600"
  loading="lazy"
/>
```

### 2. Code Splitting
```vue
<!-- Lazy load heavy components -->
<LazyMovieDatabase v-if="showMovies" />
```

### 3. Animation Performance
```js
// Use GSAP for smooth animations
gsap.to(element, {
  duration: 0.3,
  transform: 'translateY(-10px)',
  ease: 'power2.out'
})
```

## Responsive Design

### 1. Breakpoints
```sass
// Mobile first approach
.component
  // Mobile styles (default)
  
  @media (min-width: 640px)
    // Tablet styles
    
  @media (min-width: 1024px)
    // Desktop styles
```

### 2. Fluid Typography
```sass
// Use CSS custom properties
.title
  font-size: var(--fluid-32-52)
```

## Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] Color contrast compliance
- [ ] Screen reader testing

## Browser Testing

### Supported Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Testing Checklist
- [ ] Desktop responsiveness
- [ ] Mobile responsiveness
- [ ] Touch interactions
- [ ] Keyboard navigation
- [ ] Animation performance
- [ ] Loading states

## Deployment

### 1. Build Process
```bash
# Generate static site
npm run generate

# Test build locally
npm run preview
```

### 2. GitHub Pages Deployment
```bash
# Deploy to gh-pages branch
npm run deploy
```

### 3. Environment Variables
- Set in `.env` for local development
- Configure in deployment platform
- Never commit sensitive data

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript types
   - Verify import paths
   - Clear cache: `npm run clean`

2. **Styling Issues**
   - Check SASS syntax
   - Verify class names
   - Check responsive breakpoints

3. **Performance Issues**
   - Optimize images
   - Check bundle size
   - Profile animations

### Debug Tools
- Vue DevTools
- Nuxt DevTools
- Browser Performance tab
- Lighthouse audits
