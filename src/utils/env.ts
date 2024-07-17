import fs from 'node:fs';
import path from 'node:path';

const { isPackageExists } = require('local-pkg');

export const env = {
  get hasTsconfig() {
    return fs.existsSync(env.tsconfigPath);
  },

  get isAstro() {
    return isPackageExists('astro');
  },

  get isReact() {
    return isPackageExists('react');
  },

  get isTs() {
    return isPackageExists('typescript');
  },

  get isVue() {
    return isPackageExists('vue');
  },

  get tsconfig() {
    return process.env.ESLINT_TSCONFIG || 'tsconfig.json';
  },

  get tsconfigPath() {
    return path.resolve(process.cwd(), env.tsconfig);
  },

  get useTsForJs() {
    return process.env.USE_TS_FOR_JS === 'true';
  },
};
