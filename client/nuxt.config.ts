// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ['nuxt-windicss', '@nuxtjs/google-fonts', '@pinia/nuxt'],
  googleFonts: {
    families: {
      'EB Garamond': true,
    },
    preload: true,
  },
});
