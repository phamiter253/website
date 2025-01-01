export default defineNuxtConfig({
  build: {
    transpile: ['gsap']
  },
  app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Priscilla Hamiter',
			// meta: [
			// 	{
			// 		name: 'description',
			// 		content: 'Realworld Conduit was built by Nuxt3, Vue3, Quasar and etc',
			// 	}
			// ],
		},
	},

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

  routeRules: {
    //  "/**": { swr: true },
    '/dashboard/**': { ssr: false }
  },

  css: ['~/assets/styles/scss/main.scss'],
  compatibilityDate: '2024-12-31'
})
