import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.nsf')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-nsf-limit-items/nsf-to-html.html')
// Specify the maximum items to render.
viewOptions.getMailStorageOptions().setMaxItems(20)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)