/**
 * This example demonstrates how to split worksheet(s) into page(s).
 */
async function splitWorksheetsIntoPagesByRows(groupdocs, inputFilePath) {

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
    const spreadsheetOptions = groupdocs.viewer.SpreadsheetOptions
    const outputFolder = `${groupdocs.outputFolder}/splitWorksheetsIntoPagesByRows`
    const outputPath = `${outputFolder}/page_{0}.html`

    const countRowsPerPage = 15
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    viewOptions.setSpreadsheetOptions(spreadsheetOptions.forSplitSheetIntoPages(countRowsPerPage));

    console.log(`\nSource document rendered successfully.\nCheck output in ${outputFolder}`)
    return viewer.view(viewOptions)
  }

  module.exports = splitWorksheetsIntoPagesByRows

  
