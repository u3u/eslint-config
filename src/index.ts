import { defineConfig, env, require } from './utils'

const { isReact, isTs, isVue } = env

export default defineConfig({
  extends: [
    //
    './base',
    './import',
    './unicorn',
    isReact && './react',
    './regexp',
    isTs && './ts',
    isVue && './vue',
    './md',
  ]
    .filter(Boolean)
    .map((path) => require.resolve(path as string)),
})
