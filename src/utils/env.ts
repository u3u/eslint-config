import { isPackageExists } from 'local-pkg'

export const env = {
  get isReact() {
    return isPackageExists('react')
  },

  get isTs() {
    return isPackageExists('typescript')
  },
}
