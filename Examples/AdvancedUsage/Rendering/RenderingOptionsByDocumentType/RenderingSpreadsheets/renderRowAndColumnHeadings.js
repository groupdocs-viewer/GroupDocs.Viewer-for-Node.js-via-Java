/**
 * This example demonstrates how to render row and column headings.
 */
async function renderRowAndColumnHeadings(groupdocs, inputFilePath) {
  let outputFolder = `${groupdocs.outputFolder}/renderRowAndColumnHeadings/html`;
  let outputPath = `${outputFolder}/page_{0}.html`;


  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewOptions.getSpreadsheetOptions().setRenderHeadings(true);
    // viewer.view(viewOptions, 1, 2, 3)
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );
  // TO JPG
  outputFolder = `${groupdocs.outputFolder}/renderRowAndColumnHeadings/jpg`;
  outputPath = `${outputFolder}/page_{0}.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    viewOptions.getSpreadsheetOptions().setRenderHeadings(true);
    // viewer.view(viewOptions, 1, 2, 3)
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );
  // TO PNG
  outputFolder = `${groupdocs.outputFolder}/renderRowAndColumnHeadings/png`;
  outputPath = `${outputFolder}/page_{0}.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    viewOptions.getSpreadsheetOptions().setRenderHeadings(true);
    // viewer.view(viewOptions, 1, 2, 3)
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );
  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderRowAndColumnHeadings.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    viewOptions.getSpreadsheetOptions().setRenderHeadings(true);
    // viewer.view(viewOptions, 1, 2, 3)
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderRowAndColumnHeadings;
