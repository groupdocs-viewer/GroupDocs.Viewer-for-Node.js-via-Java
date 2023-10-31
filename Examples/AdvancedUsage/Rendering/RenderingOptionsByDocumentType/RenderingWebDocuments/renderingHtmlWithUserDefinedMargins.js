/**
 * This example demonstrates how to render HTML files with user defined margins.
 */
async function renderingHtmlWithUserDefinedMargins(groupdocs, inputFilePath) {
  let outputFolder = `${groupdocs.outputFolder}/renderingHtmlWithUserDefinedMargins/jpg`;
  let outputPath = `${outputFolder}/page_{0}.jpg`;

  // TO JPG
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);

    const margin = 40.1;
    viewOptions.getWordProcessingOptions().setLeftMargin(margin);
    viewOptions.getWordProcessingOptions().setRightMargin(margin);
    viewOptions.getWordProcessingOptions().setTopMargin(margin);
    viewOptions.getWordProcessingOptions().setBottomMargin(margin);

    viewer.view(viewOptions);
    console.log(
      `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
    );
  } catch (error) {
    console.log(error);
  }

  // TO PNG
  outputFolder = `${groupdocs.outputFolder}/renderingHtmlWithUserDefinedMargins/png`;
  outputPath = `${groupdocs.outputFolder}/page_{0}.png`;

  try {
    const margin = 40;

    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);

    viewOptions.getWordProcessingOptions().setLeftMargin(margin);
    viewOptions.getWordProcessingOptions().setRightMargin(margin);
    viewOptions.getWordProcessingOptions().setTopMargin(margin);
    viewOptions.getWordProcessingOptions().setBottomMargin(margin);

    viewer.view(viewOptions);
    console.log(
      `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
    );
  } catch (error) {
    console.log(error);
  }

  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingHtmlWithUserDefinedMargins.pdf`;

  try {
    const margin = 40.0;

    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);

    viewOptions.getWordProcessingOptions().setLeftMargin(margin);
    viewOptions.getWordProcessingOptions().setRightMargin(margin);
    viewOptions.getWordProcessingOptions().setTopMargin(margin);
    viewOptions.getWordProcessingOptions().setBottomMargin(margin);

    viewer.view(viewOptions);
    console.log(
      `\nSource document rendered successfully.\nCheck output in ${outputPath}`
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = renderingHtmlWithUserDefinedMargins;
