import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("Personal_net_worth_calculator.xlsx")
// Convert all Excel worksheets to one HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-excel-all-worksheets-to-single-html/xlsx-to-html.html")
// Enable converting all worksheets to one file.
viewOptions.setRenderToSinglePage(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);