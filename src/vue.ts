import { defineConfig } from './utils'

export default defineConfig({
  extends: [
    // 'plugin:vue/recommended'
  ],

  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },

      rules: {
        // https://eslint.vuejs.org/rules/
      },
    },
  ],
})
