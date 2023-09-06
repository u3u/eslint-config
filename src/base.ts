import { linesAroundComment, newlineBlocks } from './rules';
import { defineConfig } from './utils';

export default defineConfig({
  extends: ['prettier', 'plugin:arrow-return-style/recommended'],

  ignorePatterns: [
    //
    '.next',
    '*.min.*',
    'build',
    'coverage',
    'dist',
    'out',
    'output',
    'public',
    // 'temp',
  ],

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
    'dot-notation': ['warn', { allowKeywords: false }],
    eqeqeq: 'warn',

    'ext/lines-between-object-properties': ['warn', 'always', { exceptBetweenSingleLines: true }],
    'lines-around-comment': ['warn', linesAroundComment],
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

    'perfectionist/sort-array-includes': ['warn', { 'spread-last': true }],

    'perfectionist/sort-classes': [
      'warn',
      {
        groups: [
          'static-property',
          'private-property',
          'property',
          'constructor',
          'static-method',
          'private-method',
          'method',
          'unknown',
        ],
      },
    ],

    'perfectionist/sort-maps': 'warn',

    'prefer-arrow-callback': 'warn',
    'prefer-arrow-functions/prefer-arrow-functions': 'warn',
    'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-has-own': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-template': 'warn',

    quotes: ['warn', 'single', { avoidEscape: true }],

    // 'sort-class-members/sort-class-members': [
    //   'warn',
    //   {
    //     accessorPairPositioning: 'getThenSet',

    //     order: [
    //       '[static-properties]',
    //       '[static-methods]',
    //       '[properties]',
    //       '[conventional-private-properties]',
    //       'constructor',
    //       '[methods]',
    //       '[conventional-private-methods]',
    //     ],
    //   },
    // ],

    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-exports/sort-exports': ['warn', { sortExportKindFirst: 'type' }],
    'sort-keys/sort-keys-fix': 'warn',

    'spaced-comment': [
      'warn',
      'always',
      {
        block: { balanced: true },
        markers: ['/'],
      },
    ],

    yoda: 'warn',
  },
});
