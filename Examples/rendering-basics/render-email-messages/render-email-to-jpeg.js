import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.eml')
// Create a JPG image for the letter.
const viewOptions = JpgViewOptions(outputPath('render-email-to-jpeg/eml-to-jpg.jpg'))
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)