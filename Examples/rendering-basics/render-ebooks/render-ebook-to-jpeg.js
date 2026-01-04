import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.epub')
// Create a JPG image for each document page.
// {0} is replaced with the current page number in the image name.
const viewOptions = JpgViewOptions('render-ebook-to-jpeg/epub-to-jpg-page_{0}.jpg')
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)