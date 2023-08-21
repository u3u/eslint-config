import { defineConfig } from './utils';

export default defineConfig({
  extends: ['plugin:react-hooks/recommended'],

  plugins: ['react'],

  rules: {
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react/jsx-boolean-value': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-newline': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/no-unknown-property': 'off',
    'react/prefer-stateless-function': 'warn',
    // 'react/jsx-handler-names': 'warn',
    // 'react/jsx-no-useless-fragment': 'warn',
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'react/style-prop-object': 'warn',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
});
