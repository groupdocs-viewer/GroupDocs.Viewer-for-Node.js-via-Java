import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('SoftwareDevelopmentPlan.mpp')
// Render the project's active view as PNG.
// {0} is replaced with the page numbers in the output image names.
const viewOptions = PngViewOptions(outputPath('render-project-to-png/mpp-to-png-page_{0}.png'))
// Set width and height.
viewOptions.setWidth(1600)
viewOptions.setHeight(650)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)