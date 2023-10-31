/**
 * This example demonstrates how to get view info for Outlook data file.
 */
async function getViewInfoForCadDrawing(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView();
  
  const viewInfo = viewer.getViewInfo(viewInfoOptions);

  console.log("File type is: " + viewInfo.getFileType());
  console.log("Pages count: " + viewInfo.getPages().size());

  const layouts = viewInfo.getLayouts();
  for (let i = 0; i < layouts.size(); i++) {
    console.log(layouts.get(i).toString());
  }

  const layers = viewInfo.getLayers();
  for (let i = 0; i < layers.size(); i++) {
    console.log(layers.get(i).toString());
  }

  console.log("\nCAD info obtained successfully.");
}

module.exports = getViewInfoForCadDrawing;
