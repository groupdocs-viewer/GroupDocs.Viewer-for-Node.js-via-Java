import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.epub')
// Create an HTML file for the drawing.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-ebook-to-html-embedded/epub-to-html-page_{0}.html'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)