export default defineNuxtConfig({
  build: {
    transpile: ['gsap']
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Priscilla Hamiter'
      // meta: [
      // 	{
      // 		name: 'description',
      // 		content: 'Realworld Conduit was built by Nuxt3, Vue3, Quasar and etc',
      // 	}
      // ],
    }
  },
  plugins: [
    '~/plugins/gsap.client.js'
  ],
  ssr: true,
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
