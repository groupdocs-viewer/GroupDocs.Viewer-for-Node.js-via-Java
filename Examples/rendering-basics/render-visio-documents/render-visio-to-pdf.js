import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('flowchart.vsdx')
// Create a PDF file for the document.
// Specify the PDF file name.
const viewOptions = PdfViewOptions('render-visio-to-pdf/vsdx-to-pdf.pdf')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)