
async function adjustImageQuality(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  const ImageQuality = groupdocs.viewer.ImageQuality


  const outputPath = `${groupdocs.outputFolder}/adjustImage_{0}.html`
  const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
  const quality = ImageQuality.MEDIUM;
  viewOptions.getPdfOptions().setImageQuality(quality);

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions)
}
  
module.exports = adjustImageQuality
  
