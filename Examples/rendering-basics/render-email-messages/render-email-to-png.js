import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.eml')
// Create a PNG image for the letter.
const viewOptions = PngViewOptions(outputPath('render-email-to-png/eml-to-png.png'))
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)