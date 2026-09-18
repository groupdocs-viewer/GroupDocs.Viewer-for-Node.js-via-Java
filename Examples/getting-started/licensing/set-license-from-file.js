import { License } from '@groupdocs/groupdocs.viewer'
import { existsSync } from 'fs'

// Path to the license file
const licensePath = 'GroupDocs.ViewerforNode.JsviaJava.lic'

if (!existsSync(licensePath)) {
  console.log('License file not found. Running in evaluation mode.')
  process.exit(0)
}

const license = new License()
license.setLicense(licensePath)
console.log('License set successfully.')

process.exit(0)
