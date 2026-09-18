import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('TermsOfService.txt')
// Convert the text file to PDF.
const viewOptions = PdfViewOptions(outputPath('render-text-to-pdf/txt-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)