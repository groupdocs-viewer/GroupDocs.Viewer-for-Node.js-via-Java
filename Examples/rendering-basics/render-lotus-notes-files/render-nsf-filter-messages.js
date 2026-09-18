import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.nsf')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-nsf-filter-messages/nsf-to-html.html'))
// Set filters.
viewOptions.getMailStorageOptions().setTextFilter('April 2015')
viewOptions.getMailStorageOptions().setAddressFilter('test@test.com')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)