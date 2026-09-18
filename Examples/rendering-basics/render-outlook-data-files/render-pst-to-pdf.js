import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pst')
// Create a PDF file.
const viewOptions = PdfViewOptions(outputPath('render-pst-to-pdf/pst-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)