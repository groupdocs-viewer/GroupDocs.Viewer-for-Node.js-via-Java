import { Viewer, PdfViewOptions, Resolution } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pptx')
const viewOptions = PdfViewOptions(outputPath('render-presentation-with-image-resolution/pptx-to-pdf.pdf'))
viewOptions.getPresentationOptions().setResolution(Resolution.Dpi150)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)