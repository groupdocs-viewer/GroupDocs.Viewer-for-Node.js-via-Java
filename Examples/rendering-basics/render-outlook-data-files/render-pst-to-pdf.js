import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("sample.pst")
// Create a PDF file.
const viewOptions = PdfViewOptions("render-pst-to-pdf/pst-to-pdf.pdf")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);