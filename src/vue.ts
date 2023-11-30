import { defineConfig, env } from './utils';

const { useTsForJs } = env;

export default defineConfig({
  extends: [
    // 'plugin:vue/recommended'
  ],

  overrides: [
    {
      extends: useTsForJs ? [require.resolve('./disable-type-aware')] : [],
      files: ['*.vue'],
      parser: 'vue-eslint-parser',

      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
      },

      plugins: ['vue'],

      rules: {
        // https://eslint.vuejs.org/rules/
      },
    },
  ],
});
