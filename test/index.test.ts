import path from 'node:path';
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
  const options = await prettier.resolveConfig('', { config: require.resolve('@u3u/prettier-config') });

  for (const item of results.filter((item) => item.output)) {
    const result = await prettier.format(item.output!, {
      ...options,
      filepath: item.filePath,
    });

    expect(result).toMatchSnapshot(path.basename(item.filePath));
  }
});
