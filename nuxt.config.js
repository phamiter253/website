export default defineNuxtConfig({
  build: {
    transpile: ['gsap']
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Priscilla Hamiter',
      meta: [
        {
          name: 'description',
          content: 'Welcome to the portfolio of Priscilla Hamiter, a Frontend Developer. Explore my work, skills, and expertise in Frontend Development. Let’s connect and create something amazing!'
        },
        {
          name: 'keywords',
          content: 'Portfolio, Priscilla Hamiter, Frontend Developer, Work Showcase, Skills, Expertise, Frontend Development'
        },
        { name: 'author', content: 'Priscilla Hamiter' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://priscillahamiter.com/'
        }
      ]
    }
  },
  plugins: [
    '~/plugins/gsap.client.js'
  ],
  vite: {
      css: {
        preprocessorOptions: {
          sass: {
            additionalData:  '@use "~/assets/styles/sass/global.sass" as *\n'
          }
        }
      }
    },
  nitro: {
    preset: 'node-server',
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },
  routeRules: {
    '/dashboard/**': { ssr: false }
  },
  css: ['~/assets/styles/scss/main.scss'],
  compatibilityDate: '2024-12-31',
  modules: ['@nuxt/eslint']
})
