import { Viewer, ViewInfoOptions, SpreadsheetOptions } from '@groupdocs/groupdocs.viewer'
import '#license'

const viewer = new Viewer('sample.xlsx')
const viewInfoOptions = ViewInfoOptions.forHtmlView()
// Call this method to create a single page for each worksheet.
viewInfoOptions.setSpreadsheetOptions(SpreadsheetOptions.forOnePagePerSheet())
const viewInfo = viewer.getViewInfo(viewInfoOptions)
// Print the worksheet names in the console window.
console.log('The document contains the following worksheets:')
console.log(viewInfo.toString())

// Exit with a success code
process.exit(0)