/**
 * Ensure groupdocs-viewer-nodejs-*.jar is present and valid after npm install.
 * The package postinstall uses curl redirection which often writes an HTML error
 * page (~600 bytes) on Windows instead of the real ~280MB JAR.
 */
import { copyFileSync, existsSync, readdirSync, statSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'
import { homedir } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const examplesRoot = join(__dirname, '..')
const libDir = join(examplesRoot, 'node_modules', '@groupdocs', 'groupdocs.viewer', 'lib')
const minJarBytes = 10 * 1024 * 1024 // real package is ~280MB

function findJar() {
  if (!existsSync(libDir)) return null
  return readdirSync(libDir).find(f => /^groupdocs-viewer-nodejs-.*\.jar$/i.test(f)) || null
}

function isValidJar(path) {
  return existsSync(path) && statSync(path).size >= minJarBytes
}

const jarName = findJar()
if (!jarName) {
  console.warn('groupdocs.viewer lib folder or jar name not found; skip jar check.')
  process.exit(0)
}

const jarPath = join(libDir, jarName)
if (isValidJar(jarPath)) {
  console.log(`Viewer JAR OK (${Math.round(statSync(jarPath).size / 1024 / 1024)} MB): ${jarName}`)
  process.exit(0)
}

console.warn(`Viewer JAR is missing or too small (${existsSync(jarPath) ? statSync(jarPath).size : 0} bytes).`)

const versionMatch = jarName.match(/groupdocs-viewer-nodejs-(.+)\.jar$/i)
const version = versionMatch ? versionMatch[1] : '26.9'
const url = `https://releases.groupdocs.com/java/repo/com/groupdocs/groupdocs-viewer-nodejs/${version}/groupdocs-viewer-nodejs-${version}.jar`

const downloadCandidates = [
  join(homedir(), 'Downloads', jarName),
  join(homedir(), 'Завантаження', jarName),
  join(examplesRoot, jarName)
]

for (const candidate of downloadCandidates) {
  if (isValidJar(candidate)) {
    console.log(`Copying Viewer JAR from ${candidate}`)
    copyFileSync(candidate, jarPath)
    if (isValidJar(jarPath)) {
      console.log('Viewer JAR restored from local copy.')
      process.exit(0)
    }
  }
}

console.log(`Downloading Viewer JAR from ${url}`)
const curl = spawnSync('curl', ['-L', '-f', '-H', 'Cache-Control:no-cache', '-o', jarPath, url], {
  stdio: 'inherit',
  shell: true
})

if (curl.status === 0 && isValidJar(jarPath)) {
  console.log('Viewer JAR downloaded successfully.')
  process.exit(0)
}

console.error(`Could not obtain a valid ${jarName}.`)
console.error(`Place it manually at: ${jarPath}`)
console.error(`Or download: ${url}`)
process.exit(1)
