import { Viewer, HtmlViewOptions, FileName } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('documents.zip')
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-archive-with-custom-filename/zip-to-html-page_{0}.html'))

const fileName = new FileName('Sample Files')
viewOptions.getArchiveOptions().setFileName(fileName)

viewer.view(viewOptions)

// Exit with a success code
process.exit(0)