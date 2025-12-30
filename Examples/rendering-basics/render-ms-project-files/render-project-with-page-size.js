import { Viewer, PdfViewOptions, PageSize } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("SoftwareDevelopmentPlan.mpp")
// Create a PDF file.
const viewOptions = PdfViewOptions("render-project-with-page-size/mpp-to-pdf.pdf")
// Specify the page size.
viewOptions.getProjectManagementOptions().setPageSize(PageSize.A3);
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);