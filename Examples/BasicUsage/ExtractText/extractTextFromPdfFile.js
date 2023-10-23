

async function extractTextFromPdfFile(groupdocs, inputFilePath) {

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView();
  viewInfoOptions.setExtractText(true);

  const viewInfo =  viewer.getViewInfo(viewInfoOptions)

  console.log("Extracted document text:");
  const pages = viewInfo.getPages();
  for (let i = 0; i < pages.size(); i++) {
      const page = pages.get(i).getLines();        
      for (let j = 0; j < page.size(); j++) {
          const line = page.get(j);
          console.log(line.getValue());   
      }
  }
  console.log("\nText from PDF extracted successfully.");
}
  
module.exports = extractTextFromPdfFile
  
