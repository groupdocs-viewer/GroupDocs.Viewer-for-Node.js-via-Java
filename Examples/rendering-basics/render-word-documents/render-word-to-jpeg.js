import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('resume.docx')
// Create a JPG image for each document page.
// {0} is replaced with the current page number in the image name.
const viewOptions = JpgViewOptions('render-word-to-jpeg/docx-to-jpg-page_{0}.jpg')
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)