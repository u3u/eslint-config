import { rules } from '@typescript-eslint/eslint-plugin';

/** @see https://github.com/eslint/eslint-plugin-markdown/issues/209 */
export const disableTypeAwareRules = () => {
  return Object.fromEntries(
    Object.entries(rules)
      .filter(([, rule]) => rule.meta.docs?.requiresTypeChecking)
      .map(([name]) => [`@typescript-eslint/${name}`, 'off'] as const),
  );
};
