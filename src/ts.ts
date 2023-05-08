import { defineConfig, env, getTsFiles, require } from './utils'

const { hasTsconfig, useTsForJs } = env

export default defineConfig({
  overrides: hasTsconfig
    ? [
        {
          extends: [require.resolve('./ts-for-js')],
          files: getTsFiles(),
        },

        ...(useTsForJs
          ? [
              {
                extends: [require.resolve('./disable-type-aware')],
                files: ['.eslintrc.cjs'],
              },
            ]
          : []),
      ]
    : [],
})
