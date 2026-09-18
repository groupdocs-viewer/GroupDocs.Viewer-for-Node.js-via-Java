import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('HousePlan.dwg')
// Create a PDF file for the drawing.
// Specify the PDF file name.
const viewOptions = PdfViewOptions(outputPath('render-cad-to-pdf/dwg-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)