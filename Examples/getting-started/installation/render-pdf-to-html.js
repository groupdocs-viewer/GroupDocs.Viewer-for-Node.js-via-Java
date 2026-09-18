import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const filePath = 'sample.pdf'
const viewer = new Viewer(filePath)

// Render the PDF to HTML. {0} is replaced with the page number.
viewer.view(HtmlViewOptions.forEmbeddedResources(outputPath('render-pdf-to-html/page_{0}.html')))

process.exit(0)
