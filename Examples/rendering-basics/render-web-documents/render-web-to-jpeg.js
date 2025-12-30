import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("groupdocs-documentation.mhtml")
// Create a JPEG image for each drawing page.
// {0} is replaced with the current page number in the image name.
const viewOptions = JpgViewOptions("render-web-to-jpeg/mhtml-to-jpg-page_{0}.jpg")
 // Set width and height.
viewOptions.setWidth(1600)
viewOptions.setHeight(650)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);