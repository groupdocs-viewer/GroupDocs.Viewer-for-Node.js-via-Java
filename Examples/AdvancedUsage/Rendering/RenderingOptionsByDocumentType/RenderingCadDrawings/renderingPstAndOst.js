/**
 * This example demonstrates how to render PST/OST document into HTML, JPG, PNG, PDF.
 */

async function renderingPstAndOst(groupdocs, inputFilePath) {
  let outputPath = `${groupdocs.outputFolder}/renderingPstAndOst.html`;
  const loadOptions = new groupdocs.viewer.LoadOptions();
  loadOptions.setResourceLoadingTimeout(100);
  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath, loadOptions);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  // TO JPG
  let outputFolder = `${groupdocs.outputFolder}/renderingPstAndOst/jpg`;
  outputPath = `${outputFolder}/page_{0}.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath, loadOptions);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PNG
  outputFolder = `${groupdocs.outputFolder}/renderingPstAndOst/png`;
  outputPath = `${outputFolder}/page_{0}.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath, loadOptions);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingPstAndOst.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath, loadOptions);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderingPstAndOst;
