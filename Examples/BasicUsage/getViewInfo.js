
async function getViewInfo(groupdocs, inputFilePath) {

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const viewOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView()

  const info = viewer.getViewInfo(viewOptions)
  console.log(info.toString());
  console.log("\nView info retrieved successfully.");
}
  
module.exports = getViewInfo
  
  