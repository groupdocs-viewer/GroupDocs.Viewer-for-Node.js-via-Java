import { Viewer, PdfViewOptions, LoadOptions, FileType } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

// Specify the file encoding. 
const loadOptions = new LoadOptions(FileType.MD)
// Convert the document to PDF.
const viewer = new Viewer('TermsOfService.txt', loadOptions)
const viewOptions = PdfViewOptions(outputPath('render-text-file-with-loadoptions/txt-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)