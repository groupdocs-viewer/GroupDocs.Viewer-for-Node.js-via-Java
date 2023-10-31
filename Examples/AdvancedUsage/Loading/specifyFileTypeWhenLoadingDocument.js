async function specifyFileTypeWhenLoadingDocument(groupdocs, inputFilePath) {
  const loadOptions = new groupdocs.viewer.LoadOptions();
  loadOptions.setFileType(groupdocs.viewer.FileType.DOCX);

  const outputFolder = `${groupdocs.outputFolder}/specifyFileTypeWhenLoadingDocument`;
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

module.exports = specifyFileTypeWhenLoadingDocument;
