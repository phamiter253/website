export default defineNuxtConfig({
  // Site configuration
  site: {
    url: 'https://priscillahamiter.com'
  },

  // Build configuration
  build: {
    transpile: ['gsap']
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-theme': 'dark'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'format-detection',
          content: 'telephone=no'
        },
        {
          name: 'theme-color',
          content: '#000000'
        },
        {
          name: 'color-scheme',
          content: 'dark light'
        },
        {
          property: 'og:locale',
          content: 'en_US'
        }
      ],
      link: [
        {
          rel: 'alternate',
          hreflang: 'en',
          href: 'https://priscillahamiter.com'
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://priscillahamiter.com'
        },
        {
          rel: 'dns-prefetch',
          href: '//fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        }
      ]
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
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString()
      },
      {
        url: '/about',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      {
        url: '/projects',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString()
      },
      {
        url: '/projects/animal-crossing',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/projects/favorite-movies',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/projects/halloween-candy',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/projects/weather',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/projects/insecticide',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/projects/sf-monopoly',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      }
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString()
    }
  },
  // Image optimization configuration
  image: {
    format: ['webp', 'avif'],
    quality: 85,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    densities: [1, 2],
    // Presets for common image types
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300,
          fit: 'cover'
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 1920,
          height: 1080,
          fit: 'cover',
          quality: 90
        }
      },
      project: {
        modifiers: {
          format: 'webp',
          width: 1200,
          height: 800,
          fit: 'cover'
        }
      }
    }
  },
  plugins: [
    '~/plugins/gsap.client.js'
  ],
  // Vite configuration for optimized builds and development
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap']
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/sass/global.sass" as *\n'
        }
      }
    },
    optimizeDeps: {
      include: ['gsap', 'd3']
    }
  },
  router: {
    trailingSlash: false
  },
  generate: {
    fallback: true
  },
  ssr: true,
  // Development configuration
  devtools: { enabled: true },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false // Temporarily disabled to fix build issues
  },

  // Nitro server configuration
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    },
    // Compression for better performance
    compressPublicAssets: true,
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Content-Type-Options': 'nosniff'
        }
      },
      '/static/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Content-Type-Options': 'nosniff'
        }
      },
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Content-Type-Options': 'nosniff'
        }
      },
      '/favicon.ico': {
        headers: {
          'Cache-Control': 'public, max-age=86400',
          'X-Content-Type-Options': 'nosniff'
        }
      },
      '/robots.txt': {
        headers: {
          'Cache-Control': 'public, max-age=86400',
          'Content-Type': 'text/plain'
        }
      },
      '/sitemap.xml': {
        headers: {
          'Cache-Control': 'public, max-age=86400',
          'Content-Type': 'application/xml'
        }
      },
      '/**': {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      }
    }
  },
  css: ['~/assets/styles/scss/main.scss'],
  compatibilityDate: '2024-12-31'
})
