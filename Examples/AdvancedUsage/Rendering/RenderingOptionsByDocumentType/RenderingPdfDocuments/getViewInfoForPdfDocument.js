
async function getViewInfoForPdfDocument(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)


  const viewOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView()
  
  const viewInfo =  viewer.getViewInfo(viewOptions)

  console.log("Document type is: " + viewInfo.getFileType());
  console.log("Pages count: " + viewInfo.getPages().size());
  console.log("Printing allowed: " + viewInfo.isPrintingAllowed());

  console.log("\nView info retrieved successfully.");
}
  
module.exports = getViewInfoForPdfDocument
  
