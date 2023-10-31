async function setImageSizeLimits(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/setImageSizeLimits.jpg`;
  const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);

  viewOptions.setMaxWidth(400);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = setImageSizeLimits;
