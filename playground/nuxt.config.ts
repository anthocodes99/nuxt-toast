export default defineNuxtConfig({
  modules: ['../src/module'],
  css: ['/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: { config: './playground/tailwind.config.js' },
      autoprefixer: {},
    },
  },
  toast: {
    tailwindcss: true,
  },
  tailwindcss: {
    // tailwindcss related config goes here
  },
  devtools: { enabled: true },
})
