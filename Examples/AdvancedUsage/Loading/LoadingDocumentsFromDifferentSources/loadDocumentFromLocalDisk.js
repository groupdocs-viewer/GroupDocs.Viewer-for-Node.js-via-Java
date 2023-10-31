async function loadDocumentFromLocalDisk(groupdocs, inputFilePath) {
  const outputFolder = `${groupdocs.outputFolder}/loadDocumentFromLocalDisk`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = loadDocumentFromLocalDisk;
