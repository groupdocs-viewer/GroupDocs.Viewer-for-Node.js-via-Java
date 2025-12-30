import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("TermsOfService.txt")
// Create an HTML file for each PDF page.
// Specify the HTML file names and location of external resources.
// {0} and {1} are replaced with the current page number and resource name, respectively.
const viewOptions = HtmlViewOptions.forExternalResources("render-text-to-html-external/txt-to-html-page_{0}.html", "render-text-to-html-external/txt-to-html-page_{0}/resource_{0}_{1}", "render-text-to-html-external/txt-to-html-page_{0}/resource_{0}_{1}")
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);