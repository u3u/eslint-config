import { env } from './env'

export const getTsFiles = (glob = '**') => {
  const { useTsForJs } = env

  return [
    //
    `${glob}/*.{ts,tsx}`,
    useTsForJs && `${glob}/*.{js,jsx,cjs,mjs}`,
  ].filter(Boolean) as string[]
}
