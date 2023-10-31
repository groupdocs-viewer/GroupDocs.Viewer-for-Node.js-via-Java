async function renderTrackedChanges(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderTrackedChanges`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions.getWordProcessingOptions().setRenderTrackedChanges(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderTrackedChanges;
