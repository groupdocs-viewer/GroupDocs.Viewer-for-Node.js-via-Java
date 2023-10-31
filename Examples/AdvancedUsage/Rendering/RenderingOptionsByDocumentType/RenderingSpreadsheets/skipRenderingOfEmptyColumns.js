/**
 * This example demonstrates how to skip rendering of empty columns.
 */
async function skipRenderingOfEmptyColumns(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const spreadsheetOptions = groupdocs.viewer.SpreadsheetOptions;
  const outputFolder = `${groupdocs.outputFolder}/skipRenderingOfEmptyColumns`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions.getSpreadsheetOptions().setSkipEmptyColumns(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = skipRenderingOfEmptyColumns;
