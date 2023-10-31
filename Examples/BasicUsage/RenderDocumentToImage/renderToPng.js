async function renderToPng(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/renderToPng.png`;
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = renderToPng;
