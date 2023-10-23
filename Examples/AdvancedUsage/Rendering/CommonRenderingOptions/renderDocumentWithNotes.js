
async function renderDocumentWithNotes(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/page_with_notes.html`
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    viewOptions.setRenderNotes(true);
  
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = renderDocumentWithNotes
    
  