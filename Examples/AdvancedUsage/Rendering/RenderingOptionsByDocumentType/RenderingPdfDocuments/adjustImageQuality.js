async function adjustImageQuality(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const ImageQuality = groupdocs.viewer.ImageQuality;

  const outputFolder = `${groupdocs.outputFolder}/adjustImageQuality`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  const quality = ImageQuality.MEDIUM;
  viewOptions.getPdfOptions().setImageQuality(quality);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = adjustImageQuality;
