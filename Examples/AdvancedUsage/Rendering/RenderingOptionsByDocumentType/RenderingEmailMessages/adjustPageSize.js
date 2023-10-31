async function adjustPageSize(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const PageSize = groupdocs.viewer.PageSize;

  const outputPath = `${groupdocs.outputFolder}/adjustPageSize.pdf`;

  const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
  viewOptions.getEmailOptions().setPageSize(PageSize.A4);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = adjustPageSize;
