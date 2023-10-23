
async function renderToPdf(groupdocs, inputFilePath){

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  const outputPath = `${groupdocs.outputFolder}/output-to-pdf.pdf`
  const viewOptions = new groupdocs.viewer.PdfViewOptions(outputPath)

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions)
}
  
module.exports = renderToPdf
  
