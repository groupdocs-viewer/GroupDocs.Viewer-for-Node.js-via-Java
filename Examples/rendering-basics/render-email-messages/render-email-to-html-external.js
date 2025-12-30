import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("sample.eml")
// Specify the HTML file name and location of external resources.
// {0} is replaced with the resource name in the output file name.
const viewOptions = HtmlViewOptions.forExternalResources("render-email-to-html-external/eml-to-html.html", "render-email-to-html-external/eml-to-html/resource_{0}", "render-email-to-html-external/eml-to-html/resource_{0}")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);