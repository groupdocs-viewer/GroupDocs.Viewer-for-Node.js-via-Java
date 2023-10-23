
async function reorderPages(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const outputPath = `${groupdocs.outputFolder}/reorder.pdf`
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath)
  
    console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
    return viewer.view(viewOptions, 2, 1)
  }
    
  module.exports = reorderPages
    
  