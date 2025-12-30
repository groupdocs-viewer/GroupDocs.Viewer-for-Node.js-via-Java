import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("documents.zip")
// Create an HTML file for the top folder and each subfolder in the archive.
// {0} is replaced with the current page number in the output file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-archive-to-single-page/zip-to-html-page_{0}.html")
// Specify the number of items to display on each HTML page.
viewOptions.setRenderToSinglePage(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);