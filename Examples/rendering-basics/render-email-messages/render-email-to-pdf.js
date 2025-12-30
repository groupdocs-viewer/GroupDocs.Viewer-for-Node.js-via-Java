import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("sample.eml")
// Create a PDF file for the letter.
const viewOptions = PdfViewOptions("render-email-to-pdf/eml-to-pdf.pdf")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);