import { License } from '@groupdocs/groupdocs.viewer'
import { existsSync } from 'fs'

// Path to the license file
const licensePath = 'GroupDocs.Viewer.lic'

// Check if license file exists
if (!existsSync(licensePath)) {
  console.log('License file not found. Running in evaluation mode.')
  process.exit(0)
}

// Create a License object and set the license
const license = new License()
license.setLicense(licensePath)

console.log('License set successfully.')

// Terminate the process with a success exit code
process.exit(0)