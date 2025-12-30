import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("documents.zip")
// Create an HTML file for top folder and each subfolder in the archive.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-archive-to-html/zip-to-html-page_{0}.html")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);