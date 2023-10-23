
async function setImageSizeLimits(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const outputPath = `${groupdocs.outputFolder}/result_image_size_limit.jpg`
  const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath)

  
  viewOptions.setMaxWidth(400)

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions)
}
  
module.exports = setImageSizeLimits
  
