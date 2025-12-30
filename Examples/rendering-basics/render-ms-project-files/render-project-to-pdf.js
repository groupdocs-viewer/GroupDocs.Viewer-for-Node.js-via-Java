import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("SoftwareDevelopmentPlan.mpp")
// Create a PDF file.
const viewOptions = PdfViewOptions("render-project-to-pdf/mpp-to-pdf.pdf")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);