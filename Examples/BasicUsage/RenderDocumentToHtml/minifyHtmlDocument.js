

async function minifyHtmlDocument(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/output-minify.html`
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    viewOptions.setMinify(true);

    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = minifyHtmlDocument
    
  