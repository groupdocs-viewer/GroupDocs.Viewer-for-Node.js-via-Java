import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("SoftwareDevelopmentPlan.mpp")
// Create a PDF file.
const viewOptions = PdfViewOptions("render-project-with-notes/mpp-to-pdf.pdf")
// Enable notes rendering.
viewOptions.setRenderNotes(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);