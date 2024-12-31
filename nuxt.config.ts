export default defineNuxtConfig({
  // app: {
  //   baseURL: '/website/',
	// },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  routeRules: {
    "/**": { swr: true },
    "/dashboard/**": { ssr: false },
  },
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
