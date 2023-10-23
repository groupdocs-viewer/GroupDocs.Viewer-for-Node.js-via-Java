
async function renderForDisplayWithText(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/output-display-with-text.png`
    const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath)
  
    viewOptions.setExtractText(true)
    
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = renderForDisplayWithText
    
  