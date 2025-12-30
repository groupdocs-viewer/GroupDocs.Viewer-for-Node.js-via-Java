import { Viewer, PngViewOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("HousePlan.dwg")
// Create a PNG image for the drawing.
const viewOptions = PngViewOptions("render-cad-to-png/dwg-to-png.png")
// Set width and height.
viewOptions.setWidth(1500)
viewOptions.setHeight(1000)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0);