// Type definitions for composables

import type { Ref } from 'vue'
import type { GSAPAnimation, LoadingState } from './index'

// GSAP composable types
export interface UseGsapReturn {
  gsap: typeof import('gsap').gsap
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
  timeline: () => import('gsap').TimelineMax
  animate: (target: any, vars: GSAPAnimation) => import('gsap').TweenMax
}

// Loading state composable
export interface UseLoadingReturn {
  isLoading: Ref<boolean>
  loadingState: Ref<LoadingState>
  setLoading: (state: boolean) => void
  setLoadingState: (state: LoadingState) => void
}

// Modal composable
export interface UseModalReturn {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
}

// Local storage composable
export interface UseStorageReturn<T> {
  value: Ref<T>
  save: (data: T) => void
  load: () => T | null
  remove: () => void
}

// Device detection composable
export interface UseDeviceReturn {
  isMobile: Ref<boolean>
  isTablet: Ref<boolean>
  isDesktop: Ref<boolean>
  screenWidth: Ref<number>
  screenHeight: Ref<number>
}

// Intersection observer composable
export interface UseIntersectionObserverReturn {
  isIntersecting: Ref<boolean>
  target: Ref<HTMLElement | null>
}

// Form validation composable
export interface UseFormValidationReturn {
  errors: Ref<Record<string, string>>
  isValid: Ref<boolean>
  validate: (field: string, value: any) => boolean
  validateAll: (data: Record<string, any>) => boolean
  clearErrors: () => void
}
