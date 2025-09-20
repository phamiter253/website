// Global type definitions for the portfolio project

export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
  genre_ids: number[]
  runtime?: number
  genres?: Genre[]
}

export interface Genre {
  id: number
  name: string
}

export interface Villager {
  id: string
  name: string
  species: string
  personality: string
  birthday: string
  catchphrase: string
  image_url: string
  house_image_url?: string
  hobby: string
  sign: string
  saying: string
}

export interface CandyData {
  name: string
  type: string
  popularity: number
  sugar_content: number
  calories: number
  image: string
}

export interface WeatherData {
  date: string
  temperature: number
  humidity: number
  precipitation: number
  wind_speed: number
  condition: string
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  url?: string
  github?: string
  featured: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavigationItem {
  name: string
  path: string
  external?: boolean
}

// Component prop types
export interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
}

export interface CardProps {
  title: string
  description: string
  image?: string
  link?: string
  tags?: string[]
}

// Animation and interaction types
export interface GSAPAnimation {
  duration: number
  ease: string
  delay?: number
}

export interface SwipeCardData {
  id: string
  name: string
  image: string
  description: string
  liked?: boolean
}

// API Response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

// Utility types
export type Theme = 'light' | 'dark'
export type DeviceType = 'mobile' | 'tablet' | 'desktop'
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
