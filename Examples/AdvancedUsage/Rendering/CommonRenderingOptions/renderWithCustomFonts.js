async function renderWithCustomFonts(
  groupdocs,
  inputFilePath,
  fontsFolderPath
) {
  const searchOptions = groupdocs.viewer.SearchOption.TOP_FOLDER_ONLY;
  const fontSource = new groupdocs.viewer.FolderFontSource(
    fontsFolderPath,
    searchOptions
  );
  const fontSettings = groupdocs.viewer.FontSettings;
  fontSettings.setFontSources(fontSource);

  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderWithCustomFonts`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderWithCustomFonts;
