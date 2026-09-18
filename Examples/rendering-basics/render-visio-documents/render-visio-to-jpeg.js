import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('flowchart.vsdx')
// Create a JPEG image for each drawing page.
// {0} is replaced with the current page number in the image name.
const viewOptions = JpgViewOptions(outputPath('render-visio-to-jpeg/vsdx-to-jpg-page_{0}.jpg'))
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)