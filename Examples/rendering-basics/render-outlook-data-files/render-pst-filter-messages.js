import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pst')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-pst-filter-messages/pst-to-html.html'))
// Set filters.
viewOptions.getOutlookOptions().setTextFilter('Viewer')
viewOptions.getOutlookOptions().setAddressFilter('groupdocs.com')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)