import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('resume.docx')
// Create a PDF file for the document.
// Specify the PDF file name.
const viewOptions = PdfViewOptions(outputPath('render-word-to-pdf/docx-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)