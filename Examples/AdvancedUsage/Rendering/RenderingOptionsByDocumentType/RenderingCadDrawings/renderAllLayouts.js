/**
 * This example demonstrates how to render all the layouts.
 */
async function renderAllLayouts(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/renderAllLayouts`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions.getCadOptions().setRenderLayouts(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderAllLayouts;
