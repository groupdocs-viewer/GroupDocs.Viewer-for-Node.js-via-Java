import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.pst')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources()
// Render messages from the "Deleted Items" folder and its subfolders.
viewOptions.getOutlookOptions().setFolder('Deleted Items')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)