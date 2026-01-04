import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('flowchart.vsdx')
// Create a PNG image for each drawing page.
// {0} is replaced with the current page number in the image name.
const viewOptions = PngViewOptions('render-visio-to-png/vsdx-to-png-page_{0}.png')
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)