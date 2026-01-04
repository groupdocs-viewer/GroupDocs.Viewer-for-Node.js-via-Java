import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.pptx')
const viewOptions = PdfViewOptions('render-presentation-with-speaker-notes/pptx-to-pdf.pdf')
viewOptions.setRenderNotes(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)