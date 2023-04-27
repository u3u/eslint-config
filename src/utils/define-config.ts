import { type ESLint } from 'eslint'

export const defineConfig = <T extends ESLint.ConfigData>(config: T) => config
