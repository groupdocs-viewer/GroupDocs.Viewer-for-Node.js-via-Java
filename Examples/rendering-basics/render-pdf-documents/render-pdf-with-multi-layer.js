import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("resume.pdf")
// Create an HTML files.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-pdf-with-multi-layer/pdf-to-html-page_{0}.html")
// Enable the multi-layer rendering.
viewOptions.getPdfOptions().setEnableLayeredRendering(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);