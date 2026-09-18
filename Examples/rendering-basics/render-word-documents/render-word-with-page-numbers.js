import { Viewer, PdfViewOptions, WordsPageNumberLocation } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('resume.docx')
// Convert the document to PDF.
const viewOptions = PdfViewOptions(outputPath('render-word-with-page-numbers/docx-to-pdf.pdf'))
// Add page numbers in the top-left corner of each page.
viewOptions.getWordProcessingOptions().setPageNumberLocation(WordsPageNumberLocation.TOP_LEFT)
viewer.view(viewOptions)

process.exit(0)
