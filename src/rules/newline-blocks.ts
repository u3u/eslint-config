/** @see https://eslint.org/docs/latest/rules/padding-line-between-statements */
export const newlineBlocks = [
  // newline-before-blocks
  {
    blankLine: 'always',

    next: [
      // 'export',
      'block-like',
      'return',
      // 'for',
      // 'case',
      // 'default',
      // 'class',
      // 'function',
    ],

    prev: '*',
  },

  // newline-after-blocks
  {
    blankLine: 'always',
    next: '*',

    prev: [
      //
      'multiline-block-like',
      'multiline-expression',
      'multiline-const',
      'multiline-let',
      'multiline-var',
    ],
  },
] as const
