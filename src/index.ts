import { defineConfig, env, require } from './utils'

export default defineConfig({
  extends: [
    //
    './base',
    './import',
    env.isReact && './react',
    env.isTs && './ts',
    env.isVue && './vue',
  ]
    .filter(Boolean)
    .map((path) => require.resolve(path as string)),
})
