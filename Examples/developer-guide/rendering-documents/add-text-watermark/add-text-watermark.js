import { Viewer, HtmlViewOptions, Watermark } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.docx')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('add-text-watermark/docx-to-html-watermark.html'))
// Add watermark.
const watermark = new Watermark('This is a watermark')
viewOptions.setWatermark(watermark)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)