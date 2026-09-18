import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('groupdocs-documentation.mhtml')
// Convert the web file to PNG.
// {0} is replaced with the page numbers in the output image names.
const viewOptions = PngViewOptions(outputPath('render-web-to-png/mhtml-to-png-page_{0}.png'))
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(800)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)