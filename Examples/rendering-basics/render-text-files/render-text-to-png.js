import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('TermsOfService.txt')
// Convert the text file to PNG.
// {0} is replaced with the current page number in the output image names.
const viewOptions = PngViewOptions('render-text-to-png/txt-to-png-page_{0}.png')
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)