import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer'
import java from 'java'

const viewer = new Viewer('resume.docx')
// Create an HTML file for each document page.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-word-with-page-margins/docx-to-html-page_{0}.html')
// Specify the size of page margins in points.
viewOptions.getWordProcessingOptions().setTopMargin(java.newDouble(72.0))
viewOptions.getWordProcessingOptions().setBottomMargin(java.newDouble(72.0))
viewOptions.getWordProcessingOptions().setLeftMargin(java.newDouble(54.0))
viewOptions.getWordProcessingOptions().setRightMargin(java.newDouble(54.0))
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)