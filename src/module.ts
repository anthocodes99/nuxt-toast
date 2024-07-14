import { defineNuxtModule, createResolver, addComponentsDir, addImportsDir } from '@nuxt/kit'
import installTailwind from './tailwind'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@anthocodes99/nuxt-toast',
    configKey: 'toast',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')

    // Modules

    await installTailwind(_options, _nuxt, resolve)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
    })

    // Composables
    addImportsDir(resolve(runtimeDir, 'composables'))
  },
})
