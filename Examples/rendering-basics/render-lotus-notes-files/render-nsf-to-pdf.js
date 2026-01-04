import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.nsf')
// Create a PDF file.
const viewOptions = PdfViewOptions('render-nsf-to-pdf/nsf-to-pdf.pdf')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)