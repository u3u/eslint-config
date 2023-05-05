import fs from 'node:fs'
import path from 'node:path'
import { newlineBlocks } from './rules/newline-blocks'
import { defineConfig } from './utils'

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.json'
const tsconfigPath = path.resolve(process.cwd(), tsconfig)
const hasTsconfig = fs.existsSync(tsconfigPath)

export default defineConfig({
  extends: ['plugin:typescript-sort-keys/recommended'],

  overrides: hasTsconfig
    ? [
        {
          files: ['**/*.{ts,tsx}'],
          parser: '@typescript-eslint/parser',

          parserOptions: {
            project: tsconfig,
            tsconfigRootDir: process.cwd(),
          },

          plugins: ['@typescript-eslint'],

          rules: {
            '@typescript-eslint/array-type': 'warn',
            '@typescript-eslint/consistent-type-definitions': 'warn',
            '@typescript-eslint/consistent-type-exports': 'warn',

            '@typescript-eslint/consistent-type-imports': [
              'warn',
              {
                disallowTypeAnnotations: false,
                fixStyle: 'inline-type-imports',
              },
            ],

            '@typescript-eslint/lines-between-class-members': 'warn',
            '@typescript-eslint/method-signature-style': ['warn', 'method'],
            // '@typescript-eslint/no-implicit-any-catch': 'warn',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
            // '@typescript-eslint/no-unnecessary-condition': 'warn',
            '@typescript-eslint/no-unnecessary-qualifier': 'warn',

            '@typescript-eslint/padding-line-between-statements': [
              'warn',
              ...newlineBlocks,
              {
                blankLine: 'always',
                next: ['interface', 'type'],
                prev: '*',
              },
            ],

            '@typescript-eslint/prefer-as-const': 'warn',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/prefer-includes': 'warn',
            // '@typescript-eslint/prefer-nullish-coalescing': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/prefer-ts-expect-error': 'warn',
            '@typescript-eslint/return-await': 'warn',

            // Rules of Conflicts
            'lines-between-class-members': 'off',
            'no-return-await': 'off',
            'padding-line-between-statements': 'off',
          },
        },
      ]
    : [],
})
