import '@total-typescript/ts-reset';
import { defineConfig, env } from './utils';

const { isAstro, isReact, isTs, isVue } = env;

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
    isAstro && './astro',
    './json',
    './md',
  ]
    .filter(Boolean)
    .map((item) => require.resolve(item)),
});
