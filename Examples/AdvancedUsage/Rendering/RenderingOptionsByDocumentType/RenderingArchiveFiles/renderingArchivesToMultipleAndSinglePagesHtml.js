async function renderingArchivesToMultipleAndSinglePagesHtml(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderingArchivesToMultipleAndSinglePagesHtml`;
  let outputPath = `${outputFolder}/renderingArchivesToMultipleAndSinglePagesHtml.html`;
  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions.setRenderToSinglePage(true);
  const view = viewer.view(viewOptions);

  outputPath = `${outputFolder}/page_{0}.html`;

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  const viewOptions2 =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions2.getArchiveOptions().setItemsPerPage(10);

  const view2 = viewer.view(viewOptions2);
  return view;
}

module.exports = renderingArchivesToMultipleAndSinglePagesHtml;
