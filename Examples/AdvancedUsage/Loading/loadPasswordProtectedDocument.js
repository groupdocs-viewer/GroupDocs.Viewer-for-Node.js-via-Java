async function loadPasswordProtectedDocument(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.viewer.LoadOptions();
  const password = "12345";
  loadOptions.setPassword(password);

  const outputFolder = `${groupdocs.outputFolder}/loadPasswordProtectedDocument`;
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

module.exports = loadPasswordProtectedDocument;
