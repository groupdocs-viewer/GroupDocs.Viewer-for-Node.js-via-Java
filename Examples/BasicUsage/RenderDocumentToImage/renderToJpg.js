
async function renderToJPG(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const outputPath = `${groupdocs.outputFolder}/output-to-jpg.jpg`
  const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath)

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions)
}
  
module.exports = renderToJPG
  
