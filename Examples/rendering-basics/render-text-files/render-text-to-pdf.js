import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("TermsOfService.txt")
// Convert the text file to PDF.
const viewOptions = PdfViewOptions("render-text-to-pdf/txt-to-pdf.pdf")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);