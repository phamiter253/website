export default defineNuxtConfig({
  site: { 
    url: 'priscillahamiter.com' 
  },
  build: {
    transpile: ['gsap']
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],
  sitemap: {
    hostname: 'https://priscillahamiter.com',
    routes: [
      '/',
      '/about',
      '/projects',
      '/contact',
    ],
  },
  image: {
    format: ['webp', 'avif']
  },
  plugins: [
    '~/plugins/gsap.client.js'
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
      terserOptions: {
        compress: {
          drop_console: true,
          unused: true,
        }
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData:  '@use "~/assets/styles/sass/global.sass" as *\n'
        }
      }
    }
  },
  router: {
    trailingSlash: false
  },
  generate: {
    fallback: true
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    },
    routeRules: {
      '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/static/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/favicon.ico': { headers: { 'Cache-Control': 'public, max-age=86400' } },
      '/**': { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },  // No caching for HTML
    }
  },
  css: ['~/assets/styles/scss/main.scss'],
  compatibilityDate: '2024-12-31'
})
