import { Viewer, JpgViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("SoftwareDevelopmentPlan.mpp")
// Render the project's active view as JPG.
// {0} is replaced with the page numbers in the output image names.
const viewOptions = JpgViewOptions("render-project-to-jpeg/mpp-to-jpg-page_{0}.jpg")
// Set width and height.
viewOptions.setWidth(1600)
viewOptions.setHeight(650)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);