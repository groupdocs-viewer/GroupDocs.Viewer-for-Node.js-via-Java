import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import { outputPath } from '#output'

const viewer = new Viewer('SoftwareDevelopmentPlan.mpp')
// Render the project's active view as HTML.
// Specify the HTML file names and location of external resources.
// {0} and {1} are replaced with the page number and resource name, respectively.
const viewOptions = HtmlViewOptions.forExternalResources(outputPath('render-project-to-html-external/mpp-to-html-page_{0}.html'), outputPath('render-project-to-html-external/mpp-to-html-page_{0}/resource_{0}_{1}'), 'render-project-to-html-external/mpp-to-html-page_{0}/resource_{0}_{1}')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)