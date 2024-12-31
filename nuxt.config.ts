export default defineNuxtConfig({
 app: {
   baseURL: '/website/',
   },

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

 css: ['~/assets/styles/scss/main.scss'],
 compatibilityDate: '2024-12-31'
})
