import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("sample.pst")
// Specify the HTML file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-pst-to-html/pst-to-html.html")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);