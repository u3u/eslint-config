import { ESLint } from 'eslint';
import { expect, it } from 'vitest';

it('should match snapshots', async () => {
  const eslint = new ESLint({
    fix: true,

    overrideConfig: {
      ignorePatterns: ['!__fixtures__'],
    },
  });

  const results = await eslint.lintFiles(['test/__fixtures__']);

  expect(results.map((item) => item.output)).toMatchSnapshot();
});
