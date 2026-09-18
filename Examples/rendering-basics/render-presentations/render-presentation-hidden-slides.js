import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pptx')
const viewOptions = PdfViewOptions(outputPath('render-presentation-hidden-slides/pptx-to-pdf.pdf'))
viewOptions.setRenderHiddenPages(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)