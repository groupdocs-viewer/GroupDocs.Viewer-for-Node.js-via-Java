import { fileURLToPath } from 'url'
import { dirname, join, sep } from 'path'
import { mkdirSync } from 'fs'
import { applyLicense } from './apply-license.js'

const examplesRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const outputRoot = join(examplesRoot, 'output')

// Also apply license when an example imports #output.
applyLicense()

// Returns a path under Examples/output and creates parent folders if needed.
// Keeps placeholders like {0} / {1} for GroupDocs file name templates.
export function outputPath(...parts) {
  const relative = parts.length === 1
    ? String(parts[0]).replace(/[\\/]+/g, sep)
    : join(...parts.map(String))

  const fullPath = join(outputRoot, relative)
  mkdirSync(dirname(fullPath), { recursive: true })
  return fullPath
}

export { examplesRoot, outputRoot }
