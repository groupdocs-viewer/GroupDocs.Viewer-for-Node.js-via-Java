/**
 * This example demonstrates how to filter messages by text/sender/recipient
 * when rendering Outlook data files.
 */
async function limitCountOfItemsToRender(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/limitCountOfItemsToRender`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions.getOutlookOptions().setMaxItemsInFolder(3);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = limitCountOfItemsToRender;
