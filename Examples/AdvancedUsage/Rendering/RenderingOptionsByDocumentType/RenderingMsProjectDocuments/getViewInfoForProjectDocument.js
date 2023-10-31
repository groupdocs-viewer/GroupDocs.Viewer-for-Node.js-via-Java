/**
 * This example demonstrates how to get view info for MS Project document.
 */
async function getViewInfoForProjectDocument(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView();
  const viewerInfo = viewer.getViewInfo(viewInfoOptions);

  console.log("Document type is: " + viewerInfo.getFileType());
  console.log("Pages count: " + viewerInfo.getPages().size());
  console.log("Project start date: " + viewerInfo.getStartDate());
  console.log("Project end date: " + viewerInfo.getEndDate());

  console.log("\nView info retrieved successfully.");
}

module.exports = getViewInfoForProjectDocument;
