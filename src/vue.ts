import { defineConfig, env } from './utils';

const { hasTsconfig, useTsForJs } = env;

export default defineConfig({
  extends: [
    // 'plugin:vue/recommended'
  ],

  overrides: [
    {
      // extends: useTsForJs ? [require.resolve('./disable-type-aware')] : [],
      // FIXME TSConfig does not include *.vue file in test env?
      extends:
        hasTsconfig && !process.env.VITEST
          ? [require.resolve('./ts-for-js')]
          : [require.resolve('./disable-type-aware')],

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
