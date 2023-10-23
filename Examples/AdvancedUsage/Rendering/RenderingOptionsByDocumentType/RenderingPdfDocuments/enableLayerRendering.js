
async function enableLayerRendering(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const outputPath = `${groupdocs.outputFolder}/page_{0}.html`
  const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
  
  viewOptions.getPdfOptions().setEnableLayeredRendering(true);

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions, 1)
}
  
module.exports = enableLayerRendering
