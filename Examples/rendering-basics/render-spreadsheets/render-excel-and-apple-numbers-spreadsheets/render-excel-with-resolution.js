import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('invoice.xlsx')
// Convert each page to PNG. {0} is replaced with the page number.
const viewOptions = PngViewOptions(outputPath('render-excel-with-resolution/xlsx-to-png-page_{0}.png'))
// Set horizontal and vertical resolution (DPI).
viewOptions.getSpreadsheetOptions().setHorizontalResolution(192)
viewOptions.getSpreadsheetOptions().setVerticalResolution(192)
viewer.view(viewOptions)

process.exit(0)
