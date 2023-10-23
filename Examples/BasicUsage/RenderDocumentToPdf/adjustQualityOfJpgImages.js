
async function adjustQualityOfJpgImages(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/output-quality-image.pdf`
    const viewOptions = new groupdocs.viewer.PdfViewOptions(outputPath)
    viewOptions.setJpgQuality(10)
  
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = adjustQualityOfJpgImages
    
  