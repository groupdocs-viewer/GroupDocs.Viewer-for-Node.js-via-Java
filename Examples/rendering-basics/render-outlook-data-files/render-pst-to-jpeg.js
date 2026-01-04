import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.pst')
// Convert the PST file to JPG.
// {0} is replaced with the page numbers in the output image names.
const viewOptions = JpgViewOptions('render-pst-to-jpeg/pst-to-jpg-page_{0}.jpg')
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)