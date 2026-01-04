import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('HousePlan.dwg')
// Create a PDF file for the drawing.
// Specify the PDF file name.
const viewOptions = PdfViewOptions('render-cad-to-pdf/dwg-to-pdf.pdf')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)