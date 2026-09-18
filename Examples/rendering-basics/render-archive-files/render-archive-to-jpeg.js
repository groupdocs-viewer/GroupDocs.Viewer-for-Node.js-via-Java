import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('documents.zip')
// Create a JPG image for the top folder and each subfolder in the archive.
// {0} is replaced with the current page number in the image name.
const viewOptions = JpgViewOptions(outputPath('render-archive-to-jpeg/zip-to-jpg-page_{0}.jpg'))
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)