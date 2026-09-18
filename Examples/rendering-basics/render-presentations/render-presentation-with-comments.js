import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pptx')
const viewOptions = PdfViewOptions(outputPath('render-presentation-with-comments/pptx-to-pdf.pdf'))
viewOptions.setRenderComments(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)