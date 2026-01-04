import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('resume.docx')
// Convert the document to PDF.
const viewOptions = PdfViewOptions('render-word-with-comments/docx-to-pdf.pdf')
// Enable rendering comments.
viewOptions.setRenderComments(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)