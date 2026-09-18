import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('flowchart.vsdx')
// Create an HTML file for each drawing page.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-visio-to-html-embedded/vsdx-to-html-page_{0}.html'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)