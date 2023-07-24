import { newlineBlocks } from './rules';
import { defineConfig } from './utils';

export default defineConfig({
  extends: ['prettier'],

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: [
    //
    'ext',
    'only-warn',
    'perfectionist',
    'prefer-arrow-functions',
    'sort-class-members',
    'sort-destructure-keys',
    'sort-exports',
    'sort-keys',
  ],

  reportUnusedDisableDirectives: true,

  rules: {
    curly: ['warn', 'multi-or-nest', 'consistent'],
    eqeqeq: 'warn',

    'ext/lines-between-object-properties': ['warn', 'always', { exceptBetweenSingleLines: true }],
    'lines-between-class-members': 'warn',

    'no-else-return': 'warn',
    'no-lonely-if': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
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

    'perfectionist/sort-array-includes': 'warn',
    'perfectionist/sort-map-elements': 'warn',

    'prefer-arrow-callback': 'warn',
    'prefer-arrow-functions/prefer-arrow-functions': 'warn',
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-has-own': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-template': 'warn',

    quotes: ['warn', 'single', { avoidEscape: true }],

    'sort-class-members/sort-class-members': [
      'warn',
      {
        accessorPairPositioning: 'getThenSet',

        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
        ],
      },
    ],

    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-exports/sort-exports': ['warn', { sortExportKindFirst: 'type' }],
    'sort-keys/sort-keys-fix': 'warn',
  },
});
