import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("resume.pdf")
// Create a PNG image for each PDF page.
// {0} is replaced with the current page number in the image name.
const viewOptions = PngViewOptions("render-pdf-to-png/pdf-to-png-page_{0}.png")
// Enable rendering comments.
viewOptions.setRenderComments(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);