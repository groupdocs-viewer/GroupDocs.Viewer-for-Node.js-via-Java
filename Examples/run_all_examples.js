import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set license path (update this path to your license file location)
// process.env.GROUPDOCS_LICENSE_PATH = './GroupDocs.Viewer.lic';

// Console output colors
const YELLOW = '\x1b[93m';
const GREEN = '\x1b[92m';
const RED = '\x1b[91m';
const RESET = '\x1b[0m';

function printIntro() {
    const introText = `
=================================================================
Welcome to the GroupDocs.Viewer for Node.js via Java Examples!
=================================================================

This script will run a series of examples showcasing the features of GroupDocs.Viewer for Node.js via Java.
Each example demonstrates different use cases and functionalities such as:

- Rendering documents to HTML, PDF, PNG, JPEG.
- Retrieving document information.
- Handling password-protected files.
- Working with file containers and archives.
- Setting and managing licenses.

Enjoy exploring the GroupDocs API! 

=======================================================
`;
    console.log(introText);
}

async function setLicense() {
    /** Set the GroupDocs license from environment variable or license file. */
    try {
        const { License } = await import('@groupdocs/groupdocs.viewer');
        
        // First, check for license path in environment variable
        let licensePath = process.env.GROUPDOCS_LICENSE_PATH;
        
        // If not found, look for .lic files in current directory
        if (!licensePath) {
            const fs = await import('fs');
            const files = fs.readdirSync(__dirname);
            const licFile = files.find(f => f.endsWith('.lic'));
            if (licFile) {
                licensePath = join(__dirname, licFile);
            }
        }
        
        // Set license if found
        if (licensePath && existsSync(licensePath)) {
            const license = new License();
            license.setLicense(licensePath);
            console.log(`${GREEN}License set from: ${licensePath}${RESET}\n`);
        } else {
            console.log(`${YELLOW}No license file found. Running in evaluation mode.${RESET}\n`);
        }
    } catch (e) {
        console.log(`${YELLOW}Could not set license: ${e.message}${RESET}\n`);
    }
}

const examples = [
    'getting-started/installation/check-installation.js',
    'getting-started/installation/render-pdf-to-html.js',
    'getting-started/licensing/set-license-from-file.js',
    'getting-started/licensing/set-license-from-stream.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-excel-to-html-embedded.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-apple-numbers-to-html-embedded.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-excel-to-html-external.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-apple-numbers-to-html-external.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-excel-all-worksheets-to-single-html.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-excel-to-pdf.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-apple-numbers-to-pdf.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-excel-to-png.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-apple-numbers-to-png.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-excel-to-jpeg.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/render-apple-numbers-to-jpeg.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/detect-csv-separator.js',
    'rendering-basics/render-spreadsheets/render-excel-and-apple-numbers-spreadsheets/get-worksheet-names.js',
    'rendering-basics/render-word-documents/render-word-to-html-embedded-resources.js',
    'rendering-basics/render-word-documents/render-word-to-html-external-resources.js',
    'rendering-basics/render-word-documents/render-word-to-pdf.js',
    'rendering-basics/render-word-documents/render-word-to-png.js',
    'rendering-basics/render-word-documents/render-word-to-jpeg.js',
    'rendering-basics/render-word-documents/render-word-with-page-margins.js',
    'rendering-basics/render-word-documents/render-word-with-tracked-changes.js',
    'rendering-basics/render-word-documents/render-word-with-comments.js',
    'rendering-basics/render-pdf-documents/render-pdf-to-html-embedded.js',
    'rendering-basics/render-pdf-documents/render-pdf-to-html-external.js',
    'rendering-basics/render-pdf-documents/render-pdf-with-image-quality.js',
    'rendering-basics/render-pdf-documents/render-pdf-text-as-image.js',
    'rendering-basics/render-pdf-documents/render-pdf-with-multi-layer.js',
    'rendering-basics/render-pdf-documents/render-pdf-to-png.js',
    'rendering-basics/render-pdf-documents/render-pdf-to-jpeg.js',
    'rendering-basics/render-pdf-documents/render-pdf-preserve-page-size.js',
    'rendering-basics/render-pdf-documents/render-pdf-enable-font-hinting.js',
    'rendering-basics/render-pdf-documents/render-pdf-disable-chars-grouping.js',
    'rendering-basics/render-pdf-documents/render-pdf-with-comments.js',
    'rendering-basics/render-pdf-documents/get-pdf-file-information.js',
    'rendering-basics/render-pdf-documents/extract-text-from-pdf.js',
    'rendering-basics/render-presentations/render-presentation-to-html-embedded.js',
    'rendering-basics/render-presentations/render-presentation-to-html-external.js',
    'rendering-basics/render-presentations/render-presentation-to-pdf.js',
    'rendering-basics/render-presentations/render-presentation-to-png.js',
    'rendering-basics/render-presentations/render-presentation-to-jpeg.js',
    'rendering-basics/render-presentations/render-presentation-with-image-resolution.js',
    'rendering-basics/render-presentations/render-presentation-hidden-slides.js',
    'rendering-basics/render-presentations/render-presentation-with-comments.js',
    'rendering-basics/render-presentations/render-presentation-with-speaker-notes.js',
    'rendering-basics/render-visio-documents/render-visio-to-html-embedded.js',
    'rendering-basics/render-visio-documents/render-visio-to-html-external.js',
    'rendering-basics/render-visio-documents/render-visio-to-pdf.js',
    'rendering-basics/render-visio-documents/render-visio-to-png.js',
    'rendering-basics/render-visio-documents/render-visio-to-jpeg.js',
    'rendering-basics/render-visio-documents/render-visio-shapes-only.js',
    'rendering-basics/render-ms-project-files/render-project-to-html-embedded.js',
    'rendering-basics/render-ms-project-files/render-project-to-html-external.js',
    'rendering-basics/render-ms-project-files/render-project-to-pdf.js',
    'rendering-basics/render-ms-project-files/render-project-to-png.js',
    'rendering-basics/render-ms-project-files/render-project-to-jpeg.js',
    'rendering-basics/render-ms-project-files/get-project-file-information.js',
    'rendering-basics/render-ms-project-files/render-project-with-page-size.js',
    'rendering-basics/render-ms-project-files/render-project-with-time-unit.js',
    'rendering-basics/render-ms-project-files/render-project-with-notes.js',
    'rendering-basics/render-ebooks/render-ebook-to-html-embedded.js',
    'rendering-basics/render-ebooks/render-ebook-to-html-external.js',
    'rendering-basics/render-ebooks/render-ebook-to-pdf.js',
    'rendering-basics/render-ebooks/render-ebook-to-png.js',
    'rendering-basics/render-ebooks/render-ebook-to-jpeg.js',
    'rendering-basics/render-web-documents/render-web-to-pdf.js',
    'rendering-basics/render-web-documents/render-web-to-png.js',
    'rendering-basics/render-web-documents/render-web-to-jpeg.js',
    'rendering-basics/render-web-documents/render-chm-to-html-embedded.js',
    'rendering-basics/render-web-documents/render-chm-to-html-external.js',
    'rendering-basics/render-text-files/render-text-file-with-loadoptions.js',
    'rendering-basics/render-text-files/render-text-to-html-embedded.js',
    'rendering-basics/render-text-files/render-text-to-html-external.js',
    'rendering-basics/render-text-files/render-text-to-single-html-page.js',
    'rendering-basics/render-text-files/render-text-to-pdf.js',
    'rendering-basics/render-text-files/render-text-to-png.js',
    'rendering-basics/render-text-files/render-text-to-jpeg.js',
    'rendering-basics/render-text-files/render-text-with-max-rows-per-page.js',
    'rendering-basics/render-email-messages/render-email-to-html-embedded.js',
    'rendering-basics/render-email-messages/render-email-to-html-external.js',
    'rendering-basics/render-email-messages/render-email-to-pdf.js',
    'rendering-basics/render-email-messages/render-email-to-png.js',
    'rendering-basics/render-email-messages/render-email-to-jpeg.js',
    'rendering-basics/render-email-messages/render-email-with-page-size.js',
    'rendering-basics/render-email-messages/render-email-rename-fields.js',
    'rendering-basics/render-email-messages/render-email-datetime-format.js',
    'rendering-basics/render-outlook-data-files/render-pst-to-html.js',
    'rendering-basics/render-outlook-data-files/render-pst-to-pdf.js',
    'rendering-basics/render-outlook-data-files/render-pst-to-png.js',
    'rendering-basics/render-outlook-data-files/render-pst-to-jpeg.js',
    'rendering-basics/render-outlook-data-files/read-folders.js',
    'rendering-basics/render-outlook-data-files/render-pst-specific-folder.js',
    'rendering-basics/render-outlook-data-files/render-pst-limit-items.js',
    'rendering-basics/render-outlook-data-files/render-pst-filter-messages.js',
    'rendering-basics/render-lotus-notes-files/render-nsf-to-html.js',
    'rendering-basics/render-lotus-notes-files/render-nsf-to-pdf.js',
    'rendering-basics/render-lotus-notes-files/render-nsf-to-png.js',
    'rendering-basics/render-lotus-notes-files/render-nsf-to-jpeg.js',
    'rendering-basics/render-lotus-notes-files/render-nsf-limit-items.js',
    'rendering-basics/render-lotus-notes-files/render-nsf-filter-messages.js',
    'rendering-basics/render-archive-files/render-archive-to-html.js',
    'rendering-basics/render-archive-files/render-archive-to-single-page.js',
    'rendering-basics/render-archive-files/render-archive-to-pdf.js',
    'rendering-basics/render-archive-files/render-archive-to-png.js',
    'rendering-basics/render-archive-files/render-archive-to-jpeg.js',
    'rendering-basics/render-archive-files/get-archive-folders-info.js',
    'rendering-basics/render-archive-files/render-archive-specific-folder.js',
    'rendering-basics/render-archive-files/render-archive-with-custom-filename.js',
    'rendering-basics/rendering-cad-documents/render-cad-documents/render-cad-to-html-embedded.js',
    'rendering-basics/rendering-cad-documents/render-cad-documents/render-cad-to-html-external.js',
    'rendering-basics/rendering-cad-documents/render-cad-documents/render-cad-to-pdf.js',
    'rendering-basics/rendering-cad-documents/render-cad-documents/render-cad-to-png.js',
    'rendering-basics/rendering-cad-documents/render-cad-documents/render-cad-to-jpeg.js',
    'rendering-basics/rendering-cad-documents/render-cad-documents/get-cad-layouts-and-layers-info.js',
    'rendering-basics/rendering-cad-documents/render-cad-documents/render-cad-specific-layout.js',
    'rendering-basics/rendering-cad-documents/specify-rendering-options/render-cad-with-background-color.js',
    'rendering-basics/rendering-cad-documents/specify-rendering-options/render-cad-with-scale-factor.js',
    'rendering-basics/rendering-cad-documents/specify-rendering-options/render-cad-with-pc3-file.js',
    'rendering-basics/rendering-cad-documents/specify-rendering-options/render-cad-split-into-tiles.js',
    'developer-guide/retrieving-document-information/how-to-get-file-type-and-pages-count/get-file-type-and-pages-count.js',
    'developer-guide/rendering-documents/add-text-watermark/add-text-watermark.js',
    'developer-guide/processing-attachments/how-to-extract-and-save-attachments/extract-and-save-attachments.js',
];

printIntro();
await setLicense();

// Track example execution results
let totalExamples = examples.length;
let successfulExamples = 0;
let failedExamples = 0;

// Run each example script
for (const example of examples) {
    const examplePath = join(__dirname, example);
    const exampleDir = dirname(examplePath);

    console.log(`${YELLOW}Running ${example}...${RESET}`);
    try {
        // Execute the example script
        execSync(`node ${examplePath}`, {
            cwd: exampleDir,
            stdio: 'inherit',
            env: process.env
        });
        console.log(`${GREEN}Completed ${example}${RESET}\n`);
        successfulExamples++;
    } catch (e) {
        console.log(`${RED}Error running ${example}: ${e.message}${RESET}\n`);
        failedExamples++;
    }
}

// Print summary
console.log('=================================================================');
console.log(`${GREEN}Summary:${RESET}`);
console.log(`  Total examples: ${totalExamples}`);
console.log(`  Successful: ${GREEN}${successfulExamples}${RESET}`);
if (failedExamples > 0) {
    console.log(`  Failed: ${RED}${failedExamples}${RESET}`);
} else {
    console.log(`  Failed: ${GREEN}${failedExamples}${RESET}`);
}
console.log('=================================================================');

// Print completion message
console.log(`${GREEN}All examples completed${RESET}`);

// Exit with a success code
process.exit(0);
