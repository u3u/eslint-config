import { newlineBlocks } from './rules/newline-blocks'
import { defineConfig } from './utils'

export default defineConfig({
  extends: ['prettier'],

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: [
    'sort-keys',
    'sort-exports',
    'sort-destructure-keys',
    'prefer-arrow-functions',
    'only-warn',
    'ember-suave',
    'unicorn',
  ],

  reportUnusedDisableDirectives: true,

  rules: {
    'ember-suave/lines-between-object-properties': ['warn', 'always', { exceptAfterSingleLine: true }],
    eqeqeq: 'warn',
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
    'unicorn/better-regex': 'warn',
    'unicorn/catch-error-name': ['warn', { name: 'ex' }],
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/escape-case': 'warn',
    'unicorn/prefer-node-protocol': 'warn',
  },
})
