import { linesAroundComment, newlineBlocks } from './rules';
import { defineConfig, env } from './utils';

const { tsconfig } = env;

export default defineConfig({
  extends: ['plugin:typescript-sort-keys/recommended'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: tsconfig,
    tsconfigRootDir: process.cwd(),
  },

  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/ban-tslint-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/consistent-generic-constructors': 'warn',
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/consistent-type-exports': 'warn',

    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: false,
        fixStyle: 'inline-type-imports',
      },
    ],

    '@typescript-eslint/dot-notation': ['warn', { allowIndexSignaturePropertyAccess: true, allowKeywords: false }],
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],

    '@typescript-eslint/lines-around-comment': [
      'warn',
      {
        ...linesAroundComment,
        allowEnumEnd: true,
        allowEnumStart: true,
        allowInterfaceEnd: true,
        allowInterfaceStart: true,
        allowModuleEnd: true,
        allowModuleStart: true,
        allowTypeEnd: true,
        allowTypeStart: true,
      },
    ],

    '@typescript-eslint/lines-between-class-members': 'warn',
    '@typescript-eslint/method-signature-style': ['warn', 'method'],
    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    // '@typescript-eslint/no-unnecessary-condition': ['warn', { allowConstantLoopConditions: true }],
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',

    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      ...newlineBlocks,
      {
        blankLine: 'always',
        next: ['interface', 'type', 'export'],
        prev: '*',
      },
    ],

    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    // '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    // '@typescript-eslint/promise-function-async': 'warn',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/sort-type-constituents': 'warn',

    // Rules of Conflicts
    'dot-notation': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'no-array-constructor': 'off',
    'no-return-await': 'off',
    'padding-line-between-statements': 'off',
  },
});
