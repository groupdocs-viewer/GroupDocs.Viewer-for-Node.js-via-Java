

async function excludingFontsFromOutputHtml(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/output-fonts.html`
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    viewOptions.getFontsToExclude().add("Arial");

    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = excludingFontsFromOutputHtml
    
  