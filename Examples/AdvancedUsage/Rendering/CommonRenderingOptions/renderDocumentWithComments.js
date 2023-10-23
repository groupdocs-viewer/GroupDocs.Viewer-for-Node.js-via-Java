
async function renderDocumentWithComments(groupdocs, inputFilePath) {

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/page-with-comment.html`
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    viewOptions.setRenderComments(true);
  
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = renderDocumentWithComments
    
  