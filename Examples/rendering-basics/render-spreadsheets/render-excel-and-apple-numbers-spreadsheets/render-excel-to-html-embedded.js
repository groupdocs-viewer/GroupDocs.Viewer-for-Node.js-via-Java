import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('invoice.xlsx')
// Convert the spreadsheet to HTML.
// {0} is replaced with the current page number in the file names.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-excel-to-html-embedded/xlsx-to-html-page_{0}.html')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)