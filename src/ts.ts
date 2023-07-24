import { defineConfig, env, getTsFiles, require } from './utils';

const { hasTsconfig, useTsForJs } = env;

export default defineConfig({
  overrides:
    hasTsconfig || useTsForJs
      ? [
          {
            extends: hasTsconfig ? [require.resolve('./ts-for-js')] : [require.resolve('./disable-type-aware')],
            files: getTsFiles(),
          },

          ...(useTsForJs
            ? [
                {
                  extends: [require.resolve('./disable-type-aware')],
                  files: ['.eslintrc.{js,cjs}'],
                },
              ]
            : []),
        ]
      : [],
});
