/**
 * This example demonstrates how to render Ai document into HTML, JPG, PNG, PDF.
 */
async function renderingVisioDocumentsFigures(groupdocs, inputFilePath) {
  let outputPath = `${groupdocs.outputFolder}/renderingVisioDocumentsFigures.html`;

  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewOptions.getVisioRenderingOptions().setRenderFiguresOnly(true);
    viewOptions.getVisioRenderingOptions().setFigureWidth(250);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
  // TO JPG
  outputPath = `${groupdocs.outputFolder}/renderingVisioDocumentsFigures.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    viewOptions.getVisioRenderingOptions().setRenderFiguresOnly(true);
    viewOptions.getVisioRenderingOptions().setFigureWidth(250);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
  // TO PNG
  outputPath = `${groupdocs.outputFolder}/renderingVisioDocumentsFigures.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    viewOptions.getVisioRenderingOptions().setRenderFiguresOnly(true);
    viewOptions.getVisioRenderingOptions().setFigureWidth(250);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingVisioDocumentsFigures.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    viewOptions.getVisioRenderingOptions().setRenderFiguresOnly(true);
    viewOptions.getVisioRenderingOptions().setFigureWidth(250);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderingVisioDocumentsFigures;
