/**
 * This example demonstrates how to adjust output image size when rendering CAD
 * drawings.
 */

async function adjustOutputImageSize(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/adjustOutputImageSize.html`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  const scaleFactor = 0.5;

  viewOptions.setCadOptions(
    groupdocs.viewer.CadOptions.forRenderingByScaleFactor(scaleFactor)
  );

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = adjustOutputImageSize;
