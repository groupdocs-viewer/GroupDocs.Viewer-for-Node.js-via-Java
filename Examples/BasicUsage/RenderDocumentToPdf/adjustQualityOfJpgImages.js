async function adjustQualityOfJpgImages(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/adjustQualityOfJpgImages.pdf`;
  const viewOptions = new groupdocs.viewer.PdfViewOptions(outputPath);
  viewOptions.setJpgQuality(10);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = adjustQualityOfJpgImages;
