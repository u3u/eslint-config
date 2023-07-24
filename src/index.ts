import { defineConfig, env, require } from './utils';

const { isReact, isTs, isVue } = env;

export default defineConfig({
  extends: [
    //
    './base',
    './import',
    './json',
    './regexp',
    './unicorn',
    isReact && './react',
    isTs && './ts',
    isVue && './vue',
    './md',
  ]
    .filter((item): item is string => !!item)
    .map((item) => require.resolve(item)),
});
