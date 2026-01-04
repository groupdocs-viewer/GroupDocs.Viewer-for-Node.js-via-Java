import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.pst')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources()
// Specify the maximum number of folder items.
viewOptions.getOutlookOptions().setMaxItemsInFolder(30)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)