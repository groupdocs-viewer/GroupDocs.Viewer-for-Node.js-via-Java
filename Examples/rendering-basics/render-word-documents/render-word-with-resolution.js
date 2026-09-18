import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('resume.docx')
// Convert each page to PNG. {0} is replaced with the page number.
const viewOptions = PngViewOptions(outputPath('render-word-with-resolution/docx-to-png-page_{0}.png'))
// Set horizontal and vertical resolution (DPI).
viewOptions.getWordProcessingOptions().setHorizontalResolution(192)
viewOptions.getWordProcessingOptions().setVerticalResolution(192)
viewer.view(viewOptions)

process.exit(0)
