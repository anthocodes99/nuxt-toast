/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './playground/components/**/*.{js,vue,ts}',
    './playground/layouts/**/*.vue',
    './playground/pages/**/*.vue',
    './playground/plugins/**/*.{js,ts}',
    './playground/app.vue',
    './playground/error.vue',

    // TODO: find a way to work around this
    './src/runtime/components/**/*.{js,vue,ts}',
    './src/runtime/layouts/**/*.vue',
    './src/runtime/pages/**/*.vue',
    './src/runtime/plugins/**/*.{js,ts}',
    './src/runtime/app.vue',
    './src/runtime/error.vue',
  ],
  // darkMode: ['selector'],
  theme: {
    extend: {},
  },
  plugins: [],
  // ...
}
