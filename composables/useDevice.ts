import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface UseDeviceReturn {
  /** Whether device is mobile */
  isMobile: Ref<boolean>
  /** Whether device is tablet */
  isTablet: Ref<boolean>
  /** Whether device is desktop */
  isDesktop: Ref<boolean>
  /** Current screen width */
  screenWidth: Ref<number>
  /** Current screen height */
  screenHeight: Ref<number>
  /** Whether user prefers reduced motion */
  prefersReducedMotion: Ref<boolean>
  /** Whether device supports touch */
  hasTouch: Ref<boolean>
  /** Device pixel ratio */
  pixelRatio: Ref<number>
}

export function useDevice(): UseDeviceReturn {
  const screenWidth = ref(0)
  const screenHeight = ref(0)
  const prefersReducedMotion = ref(false)
  const hasTouch = ref(false)
  const pixelRatio = ref(1)

  // Breakpoints (matches your Tailwind/CSS breakpoints)
  const isMobile = computed(() => screenWidth.value < 768)
  const isTablet = computed(() => screenWidth.value >= 768 && screenWidth.value < 1024)
  const isDesktop = computed(() => screenWidth.value >= 1024)

  const updateScreenSize = () => {
    if (typeof window !== 'undefined') {
      screenWidth.value = window.innerWidth
      screenHeight.value = window.innerHeight
    }
  }

  const updateMediaQueries = () => {
    if (typeof window !== 'undefined') {
      // Check for reduced motion preference
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      prefersReducedMotion.value = reducedMotionQuery.matches

      // Check for touch support
      hasTouch.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0

      // Get device pixel ratio
      pixelRatio.value = window.devicePixelRatio || 1
    }
  }

  onMounted(() => {
    updateScreenSize()
    updateMediaQueries()

    // Listen for resize events
    window.addEventListener('resize', updateScreenSize, { passive: true })

    // Listen for media query changes
    if (window.matchMedia) {
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        prefersReducedMotion.value = e.matches
      }

      // Modern browsers
      if (reducedMotionQuery.addEventListener) {
        reducedMotionQuery.addEventListener('change', handleReducedMotionChange)
      } else {
        // Legacy browsers
        reducedMotionQuery.addListener(handleReducedMotionChange)
      }
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateScreenSize)
    }
  })

  return {
    isMobile: readonly(isMobile),
    isTablet: readonly(isTablet),
    isDesktop: readonly(isDesktop),
    screenWidth: readonly(screenWidth),
    screenHeight: readonly(screenHeight),
    prefersReducedMotion: readonly(prefersReducedMotion),
    hasTouch: readonly(hasTouch),
    pixelRatio: readonly(pixelRatio)
  }
}
