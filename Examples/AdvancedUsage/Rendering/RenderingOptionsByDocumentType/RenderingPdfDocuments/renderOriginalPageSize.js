async function renderOriginalPageSize(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderOriginalPageSize`;
  const outputPath = `${outputFolder}/page_{0}.png`;
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath);

  viewOptions.getPdfOptions().setRenderOriginalPageSize(true);

  const view = viewer.view(viewOptions);
  console.log("\nView info retrieved successfully. Check " + outputFolder);

  return view;
}

module.exports = renderOriginalPageSize;
