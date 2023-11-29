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
        // https://github.com/ota-meshi/eslint-plugin-astro
        'react/jsx-key': 'off',
      },
    },
  ],
});
