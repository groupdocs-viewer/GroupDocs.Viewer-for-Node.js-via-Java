async function adjustQualityWhenRenderingToJpg(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/adjustQualityWhenRenderingToJpg.jpg`;
  const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
  const quality = 50;
  viewOptions.setQuality(quality);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = adjustQualityWhenRenderingToJpg;
