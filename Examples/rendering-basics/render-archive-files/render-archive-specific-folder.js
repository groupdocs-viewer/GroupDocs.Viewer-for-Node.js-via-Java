import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('documents.zip')
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-archive-specific-folder/zip-to-html-page_{0}.html'))

viewOptions.getArchiveOptions().setFolder('Documents/CAD files')

viewer.view(viewOptions)

// Exit with a success code
process.exit(0)