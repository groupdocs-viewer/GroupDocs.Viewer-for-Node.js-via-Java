import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('HousePlan.dwg')
// Create an HTML file for the drawing.
// Specify the HTML file name and location of external resources.
// {0} is replaced with the resource name.
const viewOptions = HtmlViewOptions.forExternalResources('render-cad-to-html-external/dwg-to-html.html', 'render-cad-to-html-external/dwg-to-html/resource_{0}', 'render-cad-to-html-external/dwg-to-html/resource_{0}')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)