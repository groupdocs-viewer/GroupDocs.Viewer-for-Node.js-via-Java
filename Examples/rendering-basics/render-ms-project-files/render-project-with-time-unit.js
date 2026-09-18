import { Viewer, HtmlViewOptions, TimeUnit } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('sample.mpp')
const viewOptions = HtmlViewOptions.forEmbeddedResources(outputPath('render-project-with-time-unit/mpp-to-html.html'))
viewOptions.getProjectManagementOptions().setTimeUnit(TimeUnit.DAYS)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)