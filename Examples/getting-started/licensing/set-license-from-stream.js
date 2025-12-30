import { License } from '@groupdocs/groupdocs.viewer';
import java from 'java';
import { existsSync } from 'fs';

// Create a reference to Java's FileInputStream class
let InputStream = java.import('java.io.FileInputStream');

// Path to the license file
const licensePath = 'GroupDocs.Viewer.lic';

// Check if license file exists
if (!existsSync(licensePath)) {
    console.log('License file not found. Running in evaluation mode.');
    process.exit(0);
}

// Initialize a FileInputStream for the license file
const stream = new InputStream(licensePath);

// Create a License object and set the license using the InputStream
const license = new License();
license.setLicense(stream);

console.log('License set successfully.');

// Terminate the process with a success exit code
process.exit(0);