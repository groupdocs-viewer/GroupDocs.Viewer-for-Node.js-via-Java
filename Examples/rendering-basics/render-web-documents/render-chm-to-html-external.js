import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.chm')
// Convert the CHM file to HTML.
// Specify the output file names and location of external resources.
const viewOptions = HtmlViewOptions.forExternalResources('render-chm-to-html-external/chm-to-html-page_{0}.html', 'render-chm-to-html-external/chm-to-html-page_{0}/resource_{0}_{1}', 'render-chm-to-html-external/chm-to-html-page_{0}/resource_{0}_{1}')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)