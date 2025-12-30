import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("sample.nsf")
// Specify the HTML file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-nsf-to-html/nsf-to-html.html")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);