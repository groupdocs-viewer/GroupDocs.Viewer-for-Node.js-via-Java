import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.nsf')
// Convert the NSF file to PNG.
// {0} is replaced with the page numbers in the output image names.
const viewOptions = PngViewOptions(outputPath('render-nsf-to-png/nsf-to-png-page_{0}.png'))
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)