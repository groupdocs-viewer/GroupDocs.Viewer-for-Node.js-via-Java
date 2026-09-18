/**
 * Rebuild the native `java` bridge with a node-gyp that supports Visual Studio 2026.
 * The java package pins node-gyp@11, which reports "unknown version" for VS 18.x.
 */
import { spawnSync } from 'child_process'
import { existsSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const __dirname = dirname(fileURLToPath(import.meta.url))
const examplesRoot = join(__dirname, '..')
const javaRoot = join(examplesRoot, 'node_modules', 'java')
const binding = join(javaRoot, 'build', 'Release', 'nodejavabridge_bindings.node')
const jvmDllPath = join(javaRoot, 'build', 'jvm_dll_path.json')

if (!existsSync(javaRoot)) {
  console.log('java package is not installed; skip native rebuild.')
  process.exit(0)
}

if (existsSync(binding) && existsSync(jvmDllPath)) {
  console.log('java native bridge is already built.')
  process.exit(0)
}

console.log('Rebuilding java native bridge with node-gyp@12.1.0 (VS 2026 support)...')

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx'
const rebuild = spawnSync(npx, ['--yes', 'node-gyp@12.1.0', 'rebuild'], {
  cwd: javaRoot,
  stdio: 'inherit',
  shell: true,
  env: process.env
})

if (rebuild.status !== 0) {
  console.error('Failed to rebuild java. On Windows with VS 2026, ensure Desktop development with C++ is installed.')
  process.exit(rebuild.status ?? 1)
}

const postInstall = join(javaRoot, 'scripts', 'postInstall.js')
if (existsSync(postInstall)) {
  const require = createRequire(import.meta.url)
  // postInstall is CommonJS
  spawnSync(process.execPath, [postInstall], {
    cwd: javaRoot,
    stdio: 'inherit',
    env: process.env
  })
}

mkdirSync(dirname(binding), { recursive: true })
if (!existsSync(binding)) {
  console.error('Rebuild finished but binding was not found:', binding)
  process.exit(1)
}

console.log('java native bridge rebuilt successfully.')
