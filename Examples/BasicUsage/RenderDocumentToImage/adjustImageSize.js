async function adjustImageSize(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/adjustImageSize.jpg`;
  const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);

  viewOptions.setWidth(600);
  viewOptions.setHeight(800);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = adjustImageSize;
