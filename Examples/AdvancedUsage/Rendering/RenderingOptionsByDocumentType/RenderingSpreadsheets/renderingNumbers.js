/**
 * This example demonstrates how to render Apple Numbers document into HTML, JPG, PNG, PDF.
 */
async function renderingNumbers(groupdocs, inputFilePath) {
  let outputPath = `${groupdocs.outputFolder}/renderingNumbers.html`;

  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
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
  outputPath = `${groupdocs.outputFolder}/renderingNumbers.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  // TO PNG
  outputPath = `${groupdocs.outputFolder}/renderingNumbers.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingNumbers.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderingNumbers;
