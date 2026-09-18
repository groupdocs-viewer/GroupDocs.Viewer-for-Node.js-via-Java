import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('Products.numbers')
// Convert the spreadsheet to PDF.
const viewOptions = PdfViewOptions(outputPath('render-apple-numbers-to-pdf/numbers-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)