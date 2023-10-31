/**
 * This example demonstrates how to render project document within the specified
 * time interval.
 */
async function renderProjectTimeInterval(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/renderProjectTimeInterval`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView();
  const viewInfo = viewer.getViewInfo(viewInfoOptions);

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions
    .getProjectManagementOptions()
    .setStartDate(viewInfo.getStartDate());
  viewOptions.getProjectManagementOptions().setEndDate(viewInfo.getEndDate());

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderProjectTimeInterval;
