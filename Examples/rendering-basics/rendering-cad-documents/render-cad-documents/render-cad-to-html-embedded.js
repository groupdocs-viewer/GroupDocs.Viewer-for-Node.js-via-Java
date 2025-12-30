import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("HousePlan.dwg")
// Create an HTML file for the drawing.
// Specify the HTML file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-cad-to-html-embedded/dwg-to-html.html")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);