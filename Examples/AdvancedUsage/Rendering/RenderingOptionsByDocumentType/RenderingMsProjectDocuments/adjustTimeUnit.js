/**
 * This example demonstrates how to adjust time unit of the project.
 */
async function adjustTimeUnit(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputFolder = `${groupdocs.outputFolder}/adjustTimeUnit`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions
    .getProjectManagementOptions()
    .setTimeUnit(groupdocs.viewer.TimeUnit.DAYS);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = adjustTimeUnit;
