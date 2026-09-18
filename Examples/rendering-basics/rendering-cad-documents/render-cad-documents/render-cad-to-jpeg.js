import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('HousePlan.dwg')
// Create a JPG image for the drawing.
const viewOptions = JpgViewOptions(outputPath('render-cad-to-jpeg/dwg-to-jpg.jpg'))
// Set width and height.
viewOptions.setWidth(1500)
viewOptions.setHeight(1000)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)