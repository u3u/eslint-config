const blockLike = ['block-like', 'multiline-expression'] as const;
const returnLike = ['return', 'throw', 'break', 'continue', 'debugger'] as const;
const singlelineVars = ['singleline-const', 'singleline-let', 'singleline-var'] as const;
const multilineVars = ['multiline-const', 'multiline-let', 'multiline-var'] as const;

/** @see https://eslint.org/docs/latest/rules/padding-line-between-statements */
export const newlineBlocks = [
  // newline-before-blocks
  { blankLine: 'always', next: [...blockLike, ...returnLike], prev: '*' },

  // newline-after-blocks
  { blankLine: 'always', next: '*', prev: [...blockLike, ...multilineVars] },

  // newline-after-directive
  { blankLine: 'always', next: '*', prev: 'directive' },
  { blankLine: 'any', next: 'directive', prev: 'directive' },

  // newline-after-import
  { blankLine: 'always', next: '*', prev: 'import' },
  { blankLine: 'any', next: 'import', prev: 'import' },

  // newline-after-var
  { blankLine: 'always', next: '*', prev: singlelineVars },
  { blankLine: 'any', next: singlelineVars, prev: singlelineVars },
] as const;
