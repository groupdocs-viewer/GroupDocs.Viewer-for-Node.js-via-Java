async function renderPrintAreas(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/renderPrintAreas`;
  const outputPath = `${outputFolder}/page_{0}.html`;


  const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
  viewOptions.setSpreadsheetOptions(groupdocs.viewer.SpreadsheetOptions.forRenderingPrintArea());

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions)
}

module.exports = renderPrintAreas;
