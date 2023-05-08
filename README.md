# My ESLint config

[![npm version](https://badgen.net/npm/v/@u3u/eslint-config)](https://npm.im/@u3u/eslint-config) [![npm downloads](https://badgen.net/npm/dm/@u3u/eslint-config)](https://npm.im/@u3u/eslint-config)

## Features

- Sort object keys
- Sort `export` statements
- Sort destructure keys
- Sort TypeScript `interface`/`enum` keys
- Newline between specific blocks (Make your code look more comfortable)
- Support enable [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) for `.js` files
- Markdown support
- Warn only (It should be distinguished from other syntax errors)
- **Fixable rules only** (All errors can be automatically fixed without any mental burden)
- ...

> 💡 A unified sorting keys rule can save you time from worrying about the order when writing code, allowing you to focus on development itself. It can also reduce merge conflicts.

## Install

```sh
pnpm add eslint @u3u/eslint-config -D
```

## Usage

In your `.eslintrc`

```json
{
  "extends": "@u3u"
}
```

Add `lint` script to `package.json`

```json
{
  "scripts": {
    "lint": "eslint --fix ."
  }
}
```

Then you can run `pnpm lint` to fix all errors.

## TypeScript

By default, it reads the `tsconfig.json` file in the project root directory.  
You can use the `ESLINT_TSCONFIG` environment variable to specify other configuration files.

In your `.eslintrc.cjs`

```js
// @ts-check

process.env.ESLINT_TSCONFIG = 'tsconfig.json' // Optional

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['@u3u'],
}
```

(v2.0.0+) You can also set `process.env.USE_TS_FOR_JS = 'true'` in `.eslintrc.cjs` to enable [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) for `.js` files, but you need to [include](https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file) them in `tsconfig.json`, or you can use `@u3u/eslint-config/disable-type-aware` to disable type checking rules.

```js
process.env.USE_TS_FOR_JS = 'true'

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['@u3u'],

  // If you don't want to include them in `tsconfig.json`, you can also disable type checking rules.
  overrides: [
    {
      extends: ['@u3u/eslint-config/disable-type-aware'],
      files: ['**/*.{js,jsx,cjs,mjs}'],
    },
  ],
}
```

## VSCode Auto fix

In your `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.enable": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue", "markdown"]
}
```

## Custom config

The default configuration consists of the following components, which you can freely combine or disable some rules.

```js
// @ts-check

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    '@u3u/eslint-config/base',
    '@u3u/eslint-config/import',
    '@u3u/eslint-config/react', // Enable if `react` is detected as installed.
    '@u3u/eslint-config/ts', // Enable if `typescript` is detected as installed and `tsconfig.json` exists.
    '@u3u/eslint-config/unicorn',
    '@u3u/eslint-config/vue', // Enable if `vue` is detected as installed.
    '@u3u/eslint-config/md',
  ],

  rules: {
    // Disable sort rules
    'sort-destructure-keys/sort-destructure-keys': 'off',
    'sort-exports/sort-exports': 'off',
    'sort-keys/sort-keys-fix': 'off',
  },
}
```

## Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix"]
  },
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  }
}
```

then install them

```sh
pnpm add lint-staged simple-git-hooks -D
npx simple-git-hooks
```

## Related

- [u3u/prettier-config](https://github.com/u3u/prettier-config) - My Prettier config

## License

[MIT](./LICENSE) License © 2023 [u3u](https://github.com/u3u)
