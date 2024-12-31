export default defineNuxtConfig({
  app: {
    baseURL: '/website/',
    buildAssetsDir: 'assets',
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Priscilla Hamiter',
			meta: [
				{
					name: 'description',
					content: 'Realworld Conduit was built by Nuxt3, Vue3, Quasar and etc',
				}
			],
		},
	},
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  ssr: false,
  modules: [
  ],
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: false, 
  //   },
  // },
  // routeRules: {
  //   "/**": { swr: true },
  //   "/dashboard/**": { ssr: false },
  // },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       sass: {
  //         additionalData:  '@import "~/assets/styles/global.sass"'
  //       }
  //     }
  //   }
  // },
  css: ['~/assets/styles/scss/main.scss']
})
