import { join } from 'pathe'
import { defu } from 'defu'
import { addTemplate, createResolver, installModule, useNuxt } from '@nuxt/kit'
import type { ModuleOptions } from './module'

export default async function installTailwind(
  moduleOptions: ModuleOptions,
  nuxt = useNuxt(),
  resolve = createResolver(import.meta.url).resolve,
) {
  const runtimeDir = resolve('./runtime')

  // add config template
  const configTemplate = addTemplate({
    filename: 'nuxtui-tailwind.config.cjs',
    write: true,
    getContents: () => `
      module.exports = {
        plugins: [],
        content: {
          files: [
            ${JSON.stringify(resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}'))},
            ${JSON.stringify(resolve(runtimeDir, 'ui.config/**/*.{mjs,js,ts}'))}
          ],
        },
      }
    `,
  })

  // install module
  await installModule('@nuxtjs/tailwindcss', defu({
    exposeConfig: true,
    configPath: [
      configTemplate.dst,
      join(nuxt.options.rootDir, 'tailwind.config'),
    ],
  }))
}
