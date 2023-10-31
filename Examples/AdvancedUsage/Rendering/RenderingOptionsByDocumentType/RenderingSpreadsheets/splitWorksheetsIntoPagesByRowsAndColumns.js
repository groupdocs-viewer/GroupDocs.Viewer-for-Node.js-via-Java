/**
 * This example demonstrates how to split worksheet(s) into page(s).
 */
async function splitWorksheetsIntoPagesByRowsAndColumns(groupdocs, inputFilePath) {


  const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  const spreadsheetOptions = groupdocs.viewer.SpreadsheetOptions
  const outputFolder = `${groupdocs.outputFolder}/splitWorksheetsIntoPagesByRowsAndColumns`
  const outputPath = `${outputFolder}/page_{0}.html`

  const countRowsPerPage = 15;
  const countColumnsPerPage = 7;

  const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
  viewOptions.setSpreadsheetOptions(spreadsheetOptions.forSplitSheetIntoPages(countRowsPerPage, countColumnsPerPage));

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputFolder}`)
  return viewer.view(viewOptions)
}  
  
module.exports = splitWorksheetsIntoPagesByRowsAndColumns
  
