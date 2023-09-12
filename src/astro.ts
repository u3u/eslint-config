import { defineConfig, env } from './utils';

const { useTsForJs } = env;

export default defineConfig({
  extends: [
    // 'plugin:astro/recommended'
  ],

  overrides: [
    {
      extends: useTsForJs ? [require.resolve('./disable-type-aware')] : [],
      files: ['*.astro'],
      parser: 'astro-eslint-parser',

      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: '@typescript-eslint/parser',
      },

      rules: {
        // https://github.com/ota-meshi/eslint-plugin-astro
      },
    },
  ],
});
