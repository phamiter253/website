export default defineNuxtConfig({
  app: {
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
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       sass: {
  //         additionalData:  '@import "~/assets/styles/global.sass"'
  //       }
  //     }
  //   }
  // },
  css: ['~/assets/styles/scss/main.scss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }
})
