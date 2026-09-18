import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('flowchart.vsdx')
// Create a PDF file for the document.
// Specify the PDF file name.
const viewOptions = PdfViewOptions(outputPath('render-visio-to-pdf/vsdx-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)