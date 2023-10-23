
async function adjustQualityWhenRenderingToJpg(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/output-quality.jpg`
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath)
    const quality = 50;
    viewOptions.setQuality(quality);
    
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = adjustQualityWhenRenderingToJpg
    
  