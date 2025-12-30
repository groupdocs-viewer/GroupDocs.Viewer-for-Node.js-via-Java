import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("TermsOfService.txt")
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-text-to-single-html-page/txt-to-html.html")
// Render the file to a single page. 
viewOptions.setRenderToSinglePage(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);