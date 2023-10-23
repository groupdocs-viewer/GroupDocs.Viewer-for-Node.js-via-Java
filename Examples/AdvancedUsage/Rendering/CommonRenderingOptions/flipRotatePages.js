
async function flipRotatePages(groupdocs, inputFilePath) {

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/rotated.pdf`
    const viewOptions = new groupdocs.viewer.PdfViewOptions(outputPath)
    const Rotation = groupdocs.viewer.Rotation
    viewOptions.rotatePage(1, Rotation.ON_90_DEGREE);
  
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = flipRotatePages
    
  