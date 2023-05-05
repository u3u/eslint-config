import { defineConfig } from './utils'

export default defineConfig({
  plugins: ['unicorn'],

  rules: {
    'unicorn/better-regex': 'warn',
    'unicorn/catch-error-name': ['warn', { ignore: ['ex'] }],
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/escape-case': 'warn',
    'unicorn/new-for-builtins': 'warn',
    'unicorn/no-array-for-each': 'warn',
    'unicorn/no-array-method-this-argument': 'warn',
    'unicorn/no-array-push-push': 'warn',
    'unicorn/no-await-expression-member': 'warn',
    'unicorn/no-console-spaces': 'warn',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-hex-escape': 'warn',
    'unicorn/no-instanceof-array': 'warn',
    'unicorn/no-lonely-if': 'warn',
    'unicorn/no-negated-condition': 'warn',
    // 'unicorn/no-nested-ternary': 'warn', // Conflict with Prettier
    'unicorn/no-new-array': 'warn',
    'unicorn/no-new-buffer': 'warn',
    'unicorn/no-null': 'warn',
    'unicorn/no-static-only-class': 'warn',
    'unicorn/no-typeof-undefined': 'warn',
    'unicorn/no-unreadable-array-destructuring': 'warn',
    'unicorn/no-useless-fallback-in-spread': 'warn',
    'unicorn/no-useless-length-check': 'warn',
    'unicorn/no-useless-promise-resolve-reject': 'warn',
    'unicorn/no-useless-spread': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/prefer-date-now': 'warn',
    'unicorn/prefer-default-parameters': 'warn',
    'unicorn/prefer-dom-node-append': 'warn',
    'unicorn/prefer-dom-node-dataset': 'warn',
    'unicorn/prefer-dom-node-remove': 'warn',
    'unicorn/prefer-export-from': 'warn',
    'unicorn/prefer-includes': 'warn',
    'unicorn/prefer-json-parse-buffer': 'off',
    'unicorn/prefer-keyboard-event-key': 'warn',
    'unicorn/prefer-math-trunc': 'warn',
    'unicorn/prefer-modern-dom-apis': 'warn',
    'unicorn/prefer-modern-math-apis': 'warn',
    // 'unicorn/prefer-module': 'warn',
    'unicorn/prefer-native-coercion-functions': 'warn',
    'unicorn/prefer-negative-index': 'warn',
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-object-from-entries': 'warn',
    'unicorn/prefer-optional-catch-binding': 'warn',
    'unicorn/prefer-prototype-methods': 'warn',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/prefer-reflect-apply': 'warn',
    'unicorn/prefer-regexp-test': 'warn',
    'unicorn/prefer-set-has': 'warn',
    'unicorn/prefer-set-size': 'warn',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-replace-all': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/prefer-string-starts-ends-with': 'warn',
    'unicorn/prefer-string-trim-start-end': 'warn',
    'unicorn/prefer-switch': 'warn',
    'unicorn/prefer-ternary': 'warn',
    'unicorn/prefer-type-error': 'warn',
    'unicorn/require-array-join-separator': 'warn',
    'unicorn/require-number-to-fixed-digits-argument': 'warn',
    'unicorn/switch-case-braces': 'warn',
    'unicorn/template-indent': 'warn',
    'unicorn/text-encoding-identifier-case': 'warn',
    'unicorn/throw-new-error': 'warn',
  },
})
