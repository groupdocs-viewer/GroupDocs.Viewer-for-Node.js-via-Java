import { existsSync, mkdirSync, readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { License } from '@groupdocs/groupdocs.viewer'

const examplesRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const licenseDir = join(examplesRoot, 'license')

let applied = false

// Sets the license from the first *.lic file in Examples/license.
// Must be called in the same process that runs Viewer.
export function applyLicense() {
  if (applied) {
    return true
  }

  mkdirSync(licenseDir, { recursive: true })
  const licFile = readdirSync(licenseDir).find(f => f.toLowerCase().endsWith('.lic'))
  if (!licFile) {
    return false
  }

  const licensePath = join(licenseDir, licFile)
  if (!existsSync(licensePath)) {
    return false
  }

  const license = new License()
  license.setLicense(licensePath)
  applied = true
  return true
}

// Apply on import (used by run_all_examples via --import).
applyLicense()
