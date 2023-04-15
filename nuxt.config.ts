// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/tailwind-elements@0.2.0/index.min.js",
        },
      ],
    },
  }
})
 