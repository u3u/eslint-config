import { defineConfig, getTsFiles } from './utils';

export default defineConfig({
  overrides: [
    {
      files: ['*.mdx'],
      parser: 'eslint-mdx',
      plugins: ['mdx'],
      processor: 'mdx/remark',

      settings: {
        'mdx/code-blocks': true,
      },
    },

    {
      extends: [require.resolve('./disable-type-aware')],
      files: getTsFiles('**/*.mdx'),
    },
  ],
});
