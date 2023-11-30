import { defineConfig, env } from './utils';

const { hasTsconfig } = env;

export default defineConfig({
  extends: [
    // 'plugin:astro/recommended'
  ],

  overrides: [
    {
      extends: hasTsconfig ? [require.resolve('./ts-for-js')] : [require.resolve('./disable-type-aware')],
      files: ['*.astro'],
      parser: 'astro-eslint-parser',

      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: '@typescript-eslint/parser',
      },

      rules: {
        // https://ota-meshi.github.io/eslint-plugin-astro/rules/
        'astro/no-deprecated-astro-fetchcontent': 'warn',
        'astro/no-set-text-directive': 'warn',
        'astro/prefer-class-list-directive': 'warn',
        'astro/prefer-object-class-list': 'warn',
        'astro/prefer-split-class-list': 'warn',

        'react/jsx-key': 'off',

        // Wait for https://github.com/withastro/prettier-plugin-astro/issues/325
        'react/self-closing-comp': 'off',
      },
    },
  ],
});
