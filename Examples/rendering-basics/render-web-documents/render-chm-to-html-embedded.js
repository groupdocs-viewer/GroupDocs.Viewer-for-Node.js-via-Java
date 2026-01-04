import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.chm')
// Convert the CHM file to HTML.
// {0} is replaced with the page numbers in the output file names.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-chm-to-html-embedded/chm-to-html-page_{0}.html')
// Enable the following option to display all CHM content on a single HTML page.
// viewOptions.setRenderToSinglePage(true);
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)