/**
 * This example demonstrates how to get view info for Outlook data file.
 */
async function getViewInfoForOutlookDataFile(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView();
  const viewInfo = viewer.getViewInfo(viewInfoOptions);

  console.log("File type is: " + viewInfo.getFileType());
  console.log("Pages count: " + viewInfo.getPages().size());

  const folders = viewInfo.getFolders();
  for (let i = 0; i < folders.size(); i++) {
    console.log(folders.get(i).toString());
  }

  console.log("\nView info retrieved successfully.");
}

module.exports = getViewInfoForOutlookDataFile;
