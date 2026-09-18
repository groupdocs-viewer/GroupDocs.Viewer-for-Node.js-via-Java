import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('Products.numbers')
// Convert the spreadsheet to PNG.
// {0} is replaced with the current page number in the file names.
const viewOptions = PngViewOptions(outputPath('render-apple-numbers-to-png/numbers-to-png-page_{0}.png'))
// Set width and height.
viewOptions.setWidth(800)
viewOptions.setHeight(900)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)