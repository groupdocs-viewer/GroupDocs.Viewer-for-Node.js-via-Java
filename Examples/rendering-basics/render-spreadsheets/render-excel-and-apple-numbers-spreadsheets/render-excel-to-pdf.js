import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("invoice.xlsx")
// Convert the spreadsheet to PDF.
const viewOptions = PdfViewOptions("render-excel-to-pdf/xlsx-to-pdf.pdf")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);