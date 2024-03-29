import { defineConfig } from './utils';

export default defineConfig({
  plugins: ['regexp'],

  rules: {
    'regexp/control-character-escape': 'warn',
    'regexp/hexadecimal-escape': 'warn',
    'regexp/letter-case': 'warn',
    'regexp/match-any': 'warn',
    'regexp/negation': 'warn',
    'regexp/no-dupe-characters-character-class': 'warn',
    'regexp/no-extra-lookaround-assertions': 'warn',
    'regexp/no-invisible-character': 'warn',
    'regexp/no-misleading-unicode-character': 'warn',
    'regexp/no-missing-g-flag': 'warn',
    'regexp/no-super-linear-backtracking': 'warn',
    'regexp/no-trivially-nested-assertion': 'warn',
    'regexp/no-trivially-nested-quantifier': 'warn',
    'regexp/no-unused-capturing-group': 'warn',
    'regexp/no-useless-character-class': 'warn',
    'regexp/no-useless-escape': 'warn',
    'regexp/no-useless-flag': 'warn',
    'regexp/no-useless-lazy': 'warn',
    'regexp/no-useless-non-capturing-group': 'warn',
    'regexp/no-useless-quantifier': 'warn',
    'regexp/no-useless-range': 'warn',
    'regexp/no-useless-two-nums-quantifier': 'warn',
    'regexp/optimal-quantifier-concatenation': 'warn',
    'regexp/prefer-character-class': 'warn',
    'regexp/prefer-d': 'warn',
    'regexp/prefer-lookaround': 'warn',
    'regexp/prefer-named-backreference': 'warn',
    'regexp/prefer-named-replacement': 'warn',
    'regexp/prefer-plus-quantifier': 'warn',
    'regexp/prefer-predefined-assertion': 'warn',
    'regexp/prefer-quantifier': 'warn',
    'regexp/prefer-question-quantifier': 'warn',
    'regexp/prefer-range': 'warn',
    'regexp/prefer-regexp-test': 'warn',
    'regexp/prefer-result-array-groups': 'warn',
    'regexp/prefer-star-quantifier': 'warn',
    'regexp/prefer-unicode-codepoint-escapes': 'warn',
    'regexp/prefer-w': 'warn',
    'regexp/require-unicode-regexp': 'warn',
    'regexp/sort-alternatives': 'warn',
    'regexp/sort-character-class-elements': 'warn',
    'regexp/sort-flags': 'warn',
    'regexp/strict': 'warn',
    'regexp/unicode-escape': 'warn',
    'regexp/use-ignore-case': 'warn',
  },
});
