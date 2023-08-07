// @ts-check

process.env.USE_TS_FOR_JS = 'true';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@u3u'],

  ignorePatterns: ['dist', '__fixtures__'],

  rules: {
    'unicorn/consistent-destructuring': 'warn',
  },
};
