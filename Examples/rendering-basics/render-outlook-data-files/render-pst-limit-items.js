import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pst')
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-pst-limit-items/render-pst-limit-items-page_{0}.html'))
// Specify the maximum number of folder items.
viewOptions.getOutlookOptions().setMaxItemsInFolder(30)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)