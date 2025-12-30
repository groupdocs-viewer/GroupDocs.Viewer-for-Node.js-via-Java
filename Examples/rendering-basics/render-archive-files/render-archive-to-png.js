import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("documents.zip")
// Create a PNG image for the top folder and each subfolder in the archive.
// {0} is replaced with the current page number in the image name.
const viewOptions = PngViewOptions("render-archive-to-png/zip-to-png-page_{0}.png")
// Set width and height.
viewOptions.setWidth(950)
viewOptions.setHeight(550)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);