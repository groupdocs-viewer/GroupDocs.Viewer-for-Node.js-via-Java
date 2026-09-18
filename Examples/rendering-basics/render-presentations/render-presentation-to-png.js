import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.pptx')
// Create a PNG image for each slide.
// {0} is replaced with the current page number in the image name.
const viewOptions = PngViewOptions(outputPath('render-presentation-to-png/pptx-to-png-page_{0}.png'))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)