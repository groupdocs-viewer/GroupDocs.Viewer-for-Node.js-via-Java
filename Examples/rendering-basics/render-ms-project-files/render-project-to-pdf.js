import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('SoftwareDevelopmentPlan.mpp')
// Create a PDF file.
const viewOptions = PdfViewOptions(outputPath('render-project-to-pdf/mpp-to-pdf.pdf'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)