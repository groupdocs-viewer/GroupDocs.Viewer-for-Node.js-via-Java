
async function renderWithCustomFonts(groupdocs, inputFilePath, fontPath) {

  const searchOptions = groupdocs.viewer.SearchOption.TOP_FOLDER_ONLY
  const fontSettings = groupdocs.viewer.FontSettings
  const fontSource = new groupdocs.viewer.FolderFontSource(fontPath, searchOptions)
  const viewer = new groupdocs.viewer.Viewer(inputFilePath)

  fontSettings.setFontSources(fontSource)

  const outputPath = `${groupdocs.outputFolder}/renderCustomFonts/page_{0}.html`
  const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)

  console.log(`\nSource document rendered successfully.\nCheck output in ${outputPath}`)
  return viewer.view(viewOptions)
}
  
module.exports = renderWithCustomFonts
  
