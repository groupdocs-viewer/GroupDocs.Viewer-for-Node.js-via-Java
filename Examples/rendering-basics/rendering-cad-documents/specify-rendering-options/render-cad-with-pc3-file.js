import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.dwg')
// Convert the diagram to PDF.
const viewOptions = PdfViewOptions(outputPath('render-cad-with-pc3-file/dwg-to-pdf.pdf'))
// Specify a path to the PC3 file.
viewOptions.getCadOptions().setPc3File('small_page.pc3')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)