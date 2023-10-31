async function renderHiddenRowsAndColumns(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/renderHiddenRowsAndColumns`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions.getSpreadsheetOptions().setRenderHiddenColumns(true);
  viewOptions.getSpreadsheetOptions().setRenderHiddenRows(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderHiddenRowsAndColumns;
