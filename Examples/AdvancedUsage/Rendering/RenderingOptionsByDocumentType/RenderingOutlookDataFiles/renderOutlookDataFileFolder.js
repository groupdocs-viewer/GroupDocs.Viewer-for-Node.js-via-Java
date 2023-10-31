/**
 * This example demonstrates how to render messages from Inbox folder of Outlook
 * data file.
 */
async function renderOutlookDataFileFolder(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/renderOutlookDataFileFolder`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions.getOutlookOptions().setFolder("Входящие");

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderOutlookDataFileFolder;
