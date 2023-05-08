import { defineConfig, getTsFiles, require } from './utils'

export default defineConfig({
  extends: ['plugin:markdown/recommended'],

  overrides: [
    {
      extends: [require.resolve('./disable-type-aware')],
      files: getTsFiles('**/*.md'),
    },
  ],
})
