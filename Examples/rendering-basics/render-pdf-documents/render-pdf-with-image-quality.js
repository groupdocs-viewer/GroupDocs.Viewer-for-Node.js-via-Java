import { Viewer, HtmlViewOptions, ImageQuality } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('resume.pdf')
// Create an HTML files.
// {0} is replaced with the current page number in the file name.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-pdf-with-image-quality/pdf-to-html-page_{0}.html')
// Set image quality to medium.
viewOptions.getPdfOptions().setImageQuality(ImageQuality.MEDIUM)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)