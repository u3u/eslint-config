import { defineConfig, env, require } from './utils';

const { isReact, isTs, isVue } = env;

export default defineConfig({
  extends: [
    //
    './base',
    './import',
    './regexp',
    './unicorn',
    isReact && './react',
    isTs && './ts',
    isVue && './vue',
    './json',
    './md',
  ]
    .filter((item): item is string => !!item)
    .map((item) => require.resolve(item)),
});
