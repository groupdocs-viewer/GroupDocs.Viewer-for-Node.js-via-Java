import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("HousePlan.dwg")
const viewOptions = ViewInfoOptions.forHtmlView()
const info = viewer.getViewInfo(viewOptions)

// Display information about the CAD file.
console.log("File type: " + info.getFileType())
console.log("The number of pages: " + info.getPages().size())
// Display the list of existing layouts.
const layouts = info.getLayouts();
for (let i = 0; i < layouts.size(); i++) {
    console.log(layouts.get(i).toString());
}

const layers = info.getLayers();
for (let i = 0; i < layers.size(); i++) {
    console.log(layers.get(i).toString());
}

// Exit with a success code
process.exit(0);