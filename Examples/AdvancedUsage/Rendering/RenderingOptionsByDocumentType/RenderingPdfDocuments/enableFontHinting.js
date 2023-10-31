async function enableFontHinting(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/enableFontHinting`;
  const outputPath = `${outputFolder}/page_{0}.png`;
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath);

  viewOptions.getPdfOptions().setEnableFontHinting(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = enableFontHinting;
