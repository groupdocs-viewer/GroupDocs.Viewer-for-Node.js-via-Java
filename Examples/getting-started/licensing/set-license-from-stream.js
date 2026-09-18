import { License } from '@groupdocs/groupdocs.viewer'
import java from 'java'
import { existsSync } from 'fs'

const InputStream = java.import('java.io.FileInputStream')

// Path to the license file
const licensePath = 'GroupDocs.Viewer.lic'

if (!existsSync(licensePath)) {
  console.log('License file not found. Running in evaluation mode.')
  process.exit(0)
}

// Set license from a stream
const stream = new InputStream(licensePath)
const license = new License()
license.setLicense(stream)
console.log('License set successfully.')

process.exit(0)
