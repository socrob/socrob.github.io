// nuxt.config.ts
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    // Add any other modules here if necessary
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    '~/assets/custom-theme.scss',
  ],
  app: {
    baseURL: '/',  // Same root path for local development and socrob.github.io
    // Avoid a collision with the source assets/ folder during development.
    buildAssetsDir: process.env.NODE_ENV === 'development' ? '/_nuxt/' : 'assets',
    head: {
      title: 'SocRob@Home', // Your app title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'This is a brief description of your application.'
        },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/socrobfavicon.ico' }
      ]
    }
  },
})
