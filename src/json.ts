import { defineConfig } from './utils';

export default defineConfig({
  overrides: [
    {
      extends: 'plugin:eslint-plugin-json-es/recommended',
      files: ['*.json'],
      parser: 'eslint-plugin-json-es',

      rules: {
        'unicorn/numeric-separators-style': 'off',
      },
    },

    {
      files: ['package.json'],
      parser: 'eslint-plugin-json-es',

      rules: {
        'ext/lines-between-object-properties': 'off',
        'sort-keys/sort-keys-fix': 'off',
      },
    },
  ],
});
