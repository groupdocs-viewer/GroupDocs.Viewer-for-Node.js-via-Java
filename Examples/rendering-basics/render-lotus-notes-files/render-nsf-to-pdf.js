import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.nsf')
// Create a PDF file.
const viewOptions = PdfViewOptions(outputPath('render-nsf-to-pdf/nsf-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)