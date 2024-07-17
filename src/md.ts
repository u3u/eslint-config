import { defineConfig, getTsFiles } from './utils';

export default defineConfig({
  extends: ['plugin:markdown/recommended-legacy'],

  overrides: [
    {
      extends: [require.resolve('./disable-type-aware')],
      files: getTsFiles('**/*.md'),
    },
  ],
});
