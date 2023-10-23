
async function rotatePages(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
    const Rotation = groupdocs.viewer.Rotation
  
    const outputPath = `${groupdocs.outputFolder}/rotatedPage.html`
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    viewOptions.rotatePage(1, Rotation.ON_90_DEGREE);
    viewOptions.rotatePage(2, Rotation.ON_180_DEGREE);
  
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions, 1, 2)
  }
    
  module.exports = rotatePages
    
  