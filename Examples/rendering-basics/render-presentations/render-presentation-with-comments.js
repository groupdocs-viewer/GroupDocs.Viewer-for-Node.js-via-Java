import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.pptx')
const viewOptions = PdfViewOptions('render-presentation-with-comments/pptx-to-pdf.pdf')
viewOptions.setRenderComments(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)