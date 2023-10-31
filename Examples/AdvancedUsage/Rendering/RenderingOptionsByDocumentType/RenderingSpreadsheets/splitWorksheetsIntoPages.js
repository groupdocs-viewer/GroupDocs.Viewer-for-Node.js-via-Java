/**
 * This example demonstrates how to split worksheet(s) into page(s).
 */
async function splitWorksheetsIntoPages(
  groupdocs,
  inputFilePath1,
  inputFilePath2
) {
  function splitByRows() {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath1);
    const spreadsheetOptions = groupdocs.viewer.SpreadsheetOptions;
    const outputFolder = `${groupdocs.outputFolder}/splitByRows`;
    const outputPath = `${outputFolder}/page_{0}.html`;

    const countRowsPerPage = 15;
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewOptions.setSpreadsheetOptions(
      spreadsheetOptions.forSplitSheetIntoPages(countRowsPerPage)
    );

    const view = viewer.view(viewOptions);
    console.log(
      `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
    );

    return view;
  }

  function splitByRowsAndColumns() {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath2);
    const spreadsheetOptions = groupdocs.viewer.SpreadsheetOptions;
    const outputFolder = `${groupdocs.outputFolder}/splitByRowsAndColumns`;
    const outputPath = `${outputFolder}/page_{0}.html`;

    const countRowsPerPage = 15;
    const countColumnsPerPage = 7;

    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewOptions.setSpreadsheetOptions(
      spreadsheetOptions.forSplitSheetIntoPages(
        countRowsPerPage,
        countColumnsPerPage
      )
    );

    const view = viewer.view(viewOptions);
    console.log(
      `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
    );

    return view;
  }
}

module.exports = splitWorksheetsIntoPages;
