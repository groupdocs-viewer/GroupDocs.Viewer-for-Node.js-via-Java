import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('documents.zip')
// Specify the PDF file name.
const viewOptions = PdfViewOptions('render-archive-to-pdf/zip-to-pdf.pdf')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)