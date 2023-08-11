import { expect, it } from 'vitest';
import { devDependencies } from '../package.json';

it('ensure eslint plugins are dependencies', () => {
  const hasEslintDeps = Object.keys(devDependencies)
    .filter((key) => !['@u3u/eslint-config', 'eslint'].includes(key))
    .some((key) => key.includes('eslint'));

  expect(hasEslintDeps).toBe(false);
});
