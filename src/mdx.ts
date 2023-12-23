import { defineConfig, getTsFiles } from './utils';

export default defineConfig({
  overrides: [
    {
      files: ['*.mdx'],
      parser: 'eslint-mdx',
      plugins: ['mdx'],
      processor: 'mdx/remark',

      rules: {
        'react/jsx-key': 'off',
        // 'react/jsx-sort-props': 'off',
        // 'react/self-closing-comp': 'off',
      },

      settings: {
        'mdx/code-blocks': true,
      },
    },

    {
      extends: [require.resolve('./disable-type-aware')],
      files: [...getTsFiles('**/*.mdx'), '**/*.mdx/*.astro'],
    },
  ],
});
