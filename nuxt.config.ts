// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-og-image',
    '@nuxtjs/i18n',
  ],
  tailwindcss:{
    darkMode: 'selector',
  },
  site: {
    url: '',
    name: 'City Service',
    description: 'Entreprise citoyenne',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  }
})