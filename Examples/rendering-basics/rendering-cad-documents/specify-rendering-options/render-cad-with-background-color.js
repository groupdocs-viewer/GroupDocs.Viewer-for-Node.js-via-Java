import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

import java from 'java'

const Color = java.import('java.awt.Color')

const viewer = new Viewer('HousePlan.dwg')
// Convert the document to PDF.
const viewOptions = PdfViewOptions(outputPath('render-cad-with-background-color/dwg-to-pdf.pdf'))
// Specify the background color.
viewOptions.getCadOptions().setBackgroundColor(Color.YELLOW)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)