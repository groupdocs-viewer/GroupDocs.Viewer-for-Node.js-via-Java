/**
 * This example demonstrates how to filter messages by text/sender/recipient
 * when rendering Outlook data files.
 */
async function filterMessages(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/filterMessages`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions.getOutlookOptions().setTextFilter("Microsoft");
  viewOptions.getOutlookOptions().setAddressFilter("susan");

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = filterMessages;
