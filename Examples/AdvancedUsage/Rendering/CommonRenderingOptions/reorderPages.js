async function reorderPages(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/reorderPages.pdf`;
  const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);

  // return viewer.view(viewOptions, 2, 1)
  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = reorderPages;
