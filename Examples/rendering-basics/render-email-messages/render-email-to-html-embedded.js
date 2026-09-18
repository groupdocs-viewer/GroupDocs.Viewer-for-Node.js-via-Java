import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.eml')
// Create an HTML file for the letter.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-email-to-html-embedded/eml-to-html.html'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)