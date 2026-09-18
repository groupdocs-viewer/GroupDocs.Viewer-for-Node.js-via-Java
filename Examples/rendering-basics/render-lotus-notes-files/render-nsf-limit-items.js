import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.nsf')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-nsf-limit-items/nsf-to-html.html'))
// Specify the maximum items to render.
viewOptions.getMailStorageOptions().setMaxItems(20)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)