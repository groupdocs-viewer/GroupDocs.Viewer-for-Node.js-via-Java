import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('resume.pdf')
// Create an HTML files.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-pdf-text-as-image/pdf-to-html-page_{0}.html'))
// Enable rendering text as image.
viewOptions.getPdfOptions().setRenderTextAsImage(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)