import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('TermsOfService.txt')
// Convert the text file to HTML.
// {0} is replaced with the current page number in the output file names.
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-text-with-max-rows-per-page/txt-to-html-page_{0}.html'))
// Set the maximum number of rows per page.
viewOptions.getTextOptions().setMaxRowsPerPage(30)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)