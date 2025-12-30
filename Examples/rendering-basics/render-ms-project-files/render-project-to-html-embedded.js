import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("SoftwareDevelopmentPlan.mpp")
// Render the project's active view as HTML.
// {0} is replaced with the current page number in the output file names.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-project-to-html-embedded/mpp-to-html-page_{0}.html")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);