import { ref, onMounted, onUnmounted } from 'vue'

export interface UseScrollOptions {
  /** Throttle delay in milliseconds */
  throttle?: number
  /** Element to listen for scroll events (defaults to window) */
  target?: HTMLElement | Window
}

export interface UseScrollReturn {
  /** Current scroll Y position */
  scrollY: Ref<number>
  /** Current scroll X position */
  scrollX: Ref<number>
  /** Whether user is scrolling down */
  isScrollingDown: Ref<boolean>
  /** Whether user is scrolling up */
  isScrollingUp: Ref<boolean>
  /** Whether user has scrolled past threshold */
  isScrolled: Ref<boolean>
  /** Scroll to top smoothly */
  scrollToTop: () => void
  /** Scroll to element smoothly */
  scrollToElement: (element: HTMLElement | string, offset?: number) => void
}

export function useScroll(options: UseScrollOptions = {}): UseScrollReturn {
  const { throttle = 16, target = typeof window !== 'undefined' ? window : null } = options

  const scrollY = ref(0)
  const scrollX = ref(0)
  const isScrollingDown = ref(false)
  const isScrollingUp = ref(false)
  const isScrolled = ref(false)

  let lastScrollY = 0
  let scrollTimeout: NodeJS.Timeout | null = null

  const updateScrollPosition = () => {
    if (!target) return

    const currentScrollY = target === window
      ? window.scrollY
      : (target as HTMLElement).scrollTop

    const currentScrollX = target === window
      ? window.scrollX
      : (target as HTMLElement).scrollLeft

    scrollY.value = currentScrollY
    scrollX.value = currentScrollX

    // Determine scroll direction
    isScrollingDown.value = currentScrollY > lastScrollY
    isScrollingUp.value = currentScrollY < lastScrollY
    isScrolled.value = currentScrollY > 10

    lastScrollY = currentScrollY
  }

  const throttledUpdateScrollPosition = () => {
    if (scrollTimeout) return

    scrollTimeout = setTimeout(() => {
      updateScrollPosition()
      scrollTimeout = null
    }, throttle)
  }

  const scrollToTop = () => {
    if (target === window) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (target) {
      (target as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToElement = (element: HTMLElement | string, offset = 0) => {
    const targetElement = typeof element === 'string'
      ? document.querySelector(element) as HTMLElement
      : element

    if (!targetElement) return

    const elementTop = targetElement.offsetTop - offset

    if (target === window) {
      window.scrollTo({ top: elementTop, behavior: 'smooth' })
    } else if (target) {
      (target as HTMLElement).scrollTo({ top: elementTop, behavior: 'smooth' })
    }
  }

  onMounted(() => {
    if (!target) return

    // Initial position
    updateScrollPosition()

    // Add event listener
    target.addEventListener('scroll', throttledUpdateScrollPosition, { passive: true })
  })

  onUnmounted(() => {
    if (!target) return

    target.removeEventListener('scroll', throttledUpdateScrollPosition)

    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
  })

  return {
    scrollY: readonly(scrollY),
    scrollX: readonly(scrollX),
    isScrollingDown: readonly(isScrollingDown),
    isScrollingUp: readonly(isScrollingUp),
    isScrolled: readonly(isScrolled),
    scrollToTop,
    scrollToElement
  }
}
