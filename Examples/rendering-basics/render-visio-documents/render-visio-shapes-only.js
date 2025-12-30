import { Viewer, PdfViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("flowchart.vsdx")
// Convert the Visio file to PDF.
const viewOptions = PdfViewOptions("render-visio-shapes-only/vsdx-to-pdf.pdf")
// Render the master shapes only.
viewOptions.getVisioRenderingOptions().setRenderFiguresOnly(true)
// Specify shape width in pixels.
viewOptions.getVisioRenderingOptions().setFigureWidth(200)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);