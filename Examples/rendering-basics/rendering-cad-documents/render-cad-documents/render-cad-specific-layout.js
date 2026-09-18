import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.dwg')
// Convert the document to PDF.
const viewOptions = PdfViewOptions(outputPath('render-cad-specific-layout/dwg-to-pdf.pdf'))
// Specify the name of the layout to render.
// If the specified layout is not found,
// an exception occurs.
viewOptions.getCadOptions().setLayoutName('Layout1')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)