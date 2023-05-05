import { newlineBlocks } from './rules/newline-blocks'
import { defineConfig } from './utils'

export default defineConfig({
  extends: ['prettier', 'plugin:markdown/recommended'],

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: [
    //
    'sort-keys',
    'sort-exports',
    'sort-destructure-keys',
    'prefer-arrow-functions',
    'only-warn',
    'ext',
  ],

  reportUnusedDisableDirectives: true,

  rules: {
    eqeqeq: 'warn',
    'ext/lines-between-object-properties': ['error', 'always', { exceptBetweenSingleLines: true }],
    'lines-between-class-members': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',

    'padding-line-between-statements': [
      'warn',
      ...newlineBlocks,
      {
        blankLine: 'always',
        next: ['cjs-export'],
        prev: '*',
      },
    ],

    'prefer-arrow-callback': 'warn',
    'prefer-arrow-functions/prefer-arrow-functions': 'warn',
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-exports/sort-exports': ['warn', { sortExportKindFirst: 'type' }],
    'sort-keys/sort-keys-fix': 'warn',
  },
})
