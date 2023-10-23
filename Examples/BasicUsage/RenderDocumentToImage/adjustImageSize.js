
async function adjustImageSize(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/output-adjust-image.jpg`
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath)
  
    viewOptions.setWidth(600);
    viewOptions.setHeight(800);
    
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = adjustImageSize
    
  