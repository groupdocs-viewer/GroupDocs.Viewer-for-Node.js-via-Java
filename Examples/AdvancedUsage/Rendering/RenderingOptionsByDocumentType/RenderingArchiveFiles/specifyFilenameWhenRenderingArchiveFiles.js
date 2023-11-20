async function specifyFilenameWhenRenderingArchiveFiles(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/specifyFilenameWhenRenderingArchiveFiles.pdf`;
  const viewOptions =
    groupdocs.viewer.PdfViewOptions(outputPath);
  const fileName = new groupdocs.viewer.FileName("my filename");
  viewOptions.getArchiveOptions().setFileName(fileName);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = specifyFilenameWhenRenderingArchiveFiles;
