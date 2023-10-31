async function setResourceLoadingTimeout(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.viewer.LoadOptions();
  loadOptions.setResourceLoadingTimeout(60000);

  const outputFolder = `${groupdocs.outputFolder}/setResourceLoadingTimeout`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  const viewer = new groupdocs.viewer.Viewer(inputFilePath, loadOptions);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = setResourceLoadingTimeout;
