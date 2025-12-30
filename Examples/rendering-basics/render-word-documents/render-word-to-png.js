import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("resume.docx")
// Create a PNG image for each document page.
// {0} is replaced with the current page number in the image name.
const viewOptions = PngViewOptions("render-word-to-png/docx-to-png-page_{0}.png")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);