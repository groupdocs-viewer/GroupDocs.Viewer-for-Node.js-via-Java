async function renderToHtmlWithExternalResources(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderToHtmlWithExternalResources`
  const pageFilePathFormat = `${outputFolder}/page_{0}.html`;
  const resourceFilePathFormat = `${outputFolder}/page_{0}_{1}`;
  const resourceUrlFormat = `${outputFolder}/page_{0}_{1}`;

  const viewOptions = groupdocs.viewer.HtmlViewOptions.forExternalResources(
    pageFilePathFormat,
    resourceFilePathFormat,
    resourceUrlFormat
  );

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renderToHtmlWithExternalResources;
