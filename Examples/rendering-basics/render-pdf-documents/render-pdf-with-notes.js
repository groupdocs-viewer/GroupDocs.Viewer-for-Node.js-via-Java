import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('resume.pdf')
// Convert each page to PNG. {0} is replaced with the page number.
const viewOptions = PngViewOptions(outputPath('render-pdf-with-notes/pdf-to-png-page_{0}.png'))
// Render PDF notes (including notes hidden by default).
viewOptions.setRenderNotes(true)
viewer.view(viewOptions)

process.exit(0)
