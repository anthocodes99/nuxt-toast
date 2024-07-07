export default defineNuxtConfig({
  modules: ['../src/module'],
  css: ['/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: { config: './playground/tailwind.config.js' },
      autoprefixer: {},
    },
  },
  myModule: {},
  devtools: { enabled: true },
})
