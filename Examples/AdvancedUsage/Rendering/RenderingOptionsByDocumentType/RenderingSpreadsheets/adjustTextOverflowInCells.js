async function adjustTextOverflowInCells(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/adjustTextOverflowInCells`;
  const outputPath = `${outputFolder}/page_{0}.html`;


  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions
    .getSpreadsheetOptions()
    .setTextOverflowMode(groupdocs.viewer.TextOverflowMode.HIDE_TEXT);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = adjustTextOverflowInCells;
