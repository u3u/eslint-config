import { defineConfig, disableTypeAwareRules } from './utils';

export default defineConfig({
  extends: [require.resolve('./ts-for-js')],
  parserOptions: { project: null },
  rules: disableTypeAwareRules(),
});
