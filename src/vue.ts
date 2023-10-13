import { defineConfig, env } from './utils';

const { hasTsconfig } = env;

export default defineConfig({
  extends: [
    // 'plugin:vue/recommended'
  ],

  overrides: [
    {
      extends: hasTsconfig ? [require.resolve('./ts-for-js')] : [require.resolve('./disable-type-aware')],
      files: ['*.vue'],
      parser: 'vue-eslint-parser',

      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
      },

      rules: {
        // https://eslint.vuejs.org/rules/
      },
    },
  ],
});
