import { Viewer, PngViewOptions, CadOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('HousePlan.dwg')
// Create a PNG image for the drawing.
const viewOptions = PngViewOptions(outputPath('render-cad-with-scale-factor/dwg-to-png.png'))
// Specify a scale factor.
viewOptions.setCadOptions(
  CadOptions.forRenderingByScaleFactor(0.5)
)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)