async function renderForDisplayWithText(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/renderForDisplayWithText.png`;
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath);

  viewOptions.setExtractText(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = renderForDisplayWithText;
