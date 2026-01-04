import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.csv')
// Convert the spreadsheet to JPEG.
// {0} is replaced with the current page number in the file names.
const viewOptions = HtmlViewOptions.forEmbeddedResources('detect-csv-separator/csv-to-html-page_{0}.html')
// Detect a CSV/TSV separator.
viewOptions.getSpreadsheetOptions().setDetectSeparator(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)