
async function enableFontHinting(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const outputPath = `${groupdocs.outputFolder}/page_{0}.png`
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath)
  
  viewOptions.getPdfOptions().setEnableFontHinting(true);

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions, 1)
}
  
module.exports = enableFontHinting
