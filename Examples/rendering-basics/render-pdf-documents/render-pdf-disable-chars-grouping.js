import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('resume.pdf')
// Create a PNG image for each PDF page.
// {0} is replaced with the current page number in the image name.
const viewOptions = PngViewOptions('render-pdf-disable-chars-grouping/pdf-to-png-page_{0}.png')
// Disable character grouping.
viewOptions.getPdfOptions().setDisableCharsGrouping(true)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)