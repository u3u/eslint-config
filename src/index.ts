import { defineConfig, env, require } from './utils'

const { isReact, isTs, isVue } = env

export default defineConfig({
  extends: [
    //
    './base',
    './import',
    isReact && './react',
    isTs && './ts',
    './unicorn',
    isVue && './vue',
  ]
    .filter(Boolean)
    .map((path) => require.resolve(path as string)),
})
