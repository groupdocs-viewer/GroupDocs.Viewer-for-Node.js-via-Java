const java = require("java");
/**
 * This example demonstrates how to render layers.
 */
async function renderLayers(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/renderLayers`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  
  var ArrayList = java.import("java.util.ArrayList");
  var layers = new ArrayList();
  var newLayer = groupdocs.viewer.CacheableFactory.getInstance().newLayer("QUADRANT");
  
  layers.add(newLayer);

  viewOptions.getCadOptions().setLayers(layers);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderLayers;