import { defineConfig } from './utils';

export default defineConfig({
  plugins: ['import'],

  rules: {
    // 'import/no-cycle': ['warn', { allowUnsafeDynamicCyclicDependency: true }],
    'import/no-duplicates': 'warn',
    'import/no-relative-packages': 'warn',
    'import/no-self-import': 'warn',
    'import/no-useless-path-segments': 'warn',
  },
});
