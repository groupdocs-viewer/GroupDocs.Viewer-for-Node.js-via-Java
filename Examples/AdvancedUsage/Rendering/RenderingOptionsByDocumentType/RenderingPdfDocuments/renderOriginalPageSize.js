
async function renderOriginalPageSize(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)


  const outputPath = `${groupdocs.outputFolder}/page_{0}.png`
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath)

  viewOptions.getPdfOptions().setRenderOriginalPageSize(true)

  console.log("\nView info retrieved successfully.");
  return viewer.view(viewOptions)
}
  
module.exports = renderOriginalPageSize
  
