import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('documents.zip')
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-archive-specific-folder/zip-to-html-page_{0}.html')

viewOptions.getArchiveOptions().setFolder('Documents/CAD files')

viewer.view(viewOptions)

// Exit with a success code
process.exit(0)