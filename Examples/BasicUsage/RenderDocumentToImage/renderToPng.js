
async function renderToPng(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const outputPath = `${groupdocs.outputFolder}/output-to-png.png`
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath)

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions)
}
  
module.exports = renderToPng
  
