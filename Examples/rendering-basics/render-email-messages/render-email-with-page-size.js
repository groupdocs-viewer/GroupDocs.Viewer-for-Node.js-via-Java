import { Viewer, PdfViewOptions, PageSize } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.eml')
// Create a PDF file for the letter.
const viewOptions = PdfViewOptions(outputPath('render-email-with-page-size/eml-to-pdf.pdf'))
viewOptions.getEmailOptions().setPageSize(PageSize.LETTER)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)