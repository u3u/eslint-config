import { ESLint } from 'eslint';
import prettier from 'prettier';
import { expect, it } from 'vitest';

it('should match snapshots', async () => {
  const eslint = new ESLint({
    fix: true,

    overrideConfig: {
      ignorePatterns: ['!__fixtures__'],
    },
  });

  const results = await eslint.lintFiles(['test/__fixtures__']);
  const options = await prettier.resolveConfig(process.cwd());

  expect(
    results.map((item) =>
      prettier.format(item.output!, {
        ...options,
        filepath: item.filePath,
      })
    )
  ).toMatchSnapshot();
});
