import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("Products.numbers")
// Convert the spreadsheet to JPEG.
// {0} is replaced with the current page number in the file names.
const viewOptions = JpgViewOptions("render-apple-numbers-to-jpeg/numbers-to-jpg-page_{0}.jpg")
// Set width and height.
viewOptions.setWidth(800)
viewOptions.setHeight(900)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);