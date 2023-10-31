/**
 * This example demonstrates how to adjust output image size when rendering CAD drawings.
 */
async function setImageBackgroundColor(groupdocs, inputFilePath) {

  const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  const outputFolder = `${groupdocs.outputFolder}/setImageBackgroundColor`
  const outputPath = `${outputFolder}/page_{0}.png`
  const viewOptions = new groupdocs.viewer.PngViewOptions(outputPath)
  viewOptions.setCadOptions(groupdocs.viewer.CadOptions.forRenderingByWidth(800));
  viewOptions.getCadOptions().setBackgroundColor("RED");

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = setImageBackgroundColor;
