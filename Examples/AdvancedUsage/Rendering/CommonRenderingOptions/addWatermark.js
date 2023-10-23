
async function addWatermark(groupdocs, inputFilePath) {

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/output-watermark.html`
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    const Watermark = new groupdocs.viewer.Watermark('This is a watermark')
    viewOptions.setWatermark(Watermark);
  
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = addWatermark
    
  