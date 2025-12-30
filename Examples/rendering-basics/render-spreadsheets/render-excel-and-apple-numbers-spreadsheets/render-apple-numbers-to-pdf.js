import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("Products.numbers")
// Convert the spreadsheet to PDF.
const viewOptions = PdfViewOptions("render-apple-numbers-to-pdf/numbers-to-pdf.pdf")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);