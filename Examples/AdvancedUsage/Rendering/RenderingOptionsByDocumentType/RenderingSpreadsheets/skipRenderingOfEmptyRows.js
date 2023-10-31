/**
 * This example demonstrates how to skip rendering of empty rows.
 */
async function skipRenderingOfEmptyRows(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/skipRenderingOfEmptyRows`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions.getSpreadsheetOptions().setSkipEmptyRows(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = skipRenderingOfEmptyRows;
