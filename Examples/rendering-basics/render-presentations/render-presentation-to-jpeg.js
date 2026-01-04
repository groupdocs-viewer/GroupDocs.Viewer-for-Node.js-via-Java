import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.pptx')
// Create a JPG image for each slide.
// {0} is replaced with the current page number in the image name.
const viewOptions = JpgViewOptions('render-presentation-to-jpeg/pptx-to-jpg-page_{0}.jpg')
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)