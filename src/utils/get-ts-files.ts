import path from 'node:path';
import { env } from './env';

export const getTsFiles = (glob = '') => {
  const { useTsForJs } = env;

  return [
    //
    path.join(glob, '*.{ts,tsx,mts,cts}'),
    useTsForJs && path.join(glob, '*.{js,jsx,cjs,mjs}'),
  ].filter(Boolean);
};
