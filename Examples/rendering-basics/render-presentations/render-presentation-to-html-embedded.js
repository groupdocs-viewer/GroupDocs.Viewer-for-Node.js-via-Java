import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.pptx')
// Create an HTML file for each slide.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-presentation-to-html-embedded/pptx-to-html-page_{0}.html')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)