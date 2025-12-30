import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("TermsOfService.txt")
// Convert the text file to JPEG.
// {0} is replaced with the current page number in the output image names.
const viewOptions = JpgViewOptions("render-text-to-jpeg/txt-to-jpg-page_{0}.jpg")
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);