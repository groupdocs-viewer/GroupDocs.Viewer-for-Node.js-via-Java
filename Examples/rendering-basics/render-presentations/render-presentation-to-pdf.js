import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pptx')
const viewOptions = PdfViewOptions(outputPath('render-presentation-to-pdf/pptx-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)