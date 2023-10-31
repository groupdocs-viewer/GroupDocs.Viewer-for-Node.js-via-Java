/**
 * This example demonstrates how to render TXT document into HTML, JPG, PNG, PDF.
 */

async function renderingTxt(groupdocs, inputFilePath, inputFilePath2) {
  let outputPath = `${groupdocs.outputFolder}/renderingTxt.html`;

  // TO MULTI PAGES HTML
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

  outputPath = `${groupdocs.outputFolder}/renderingTxtSinglePage.html`;

  // TO SINGLE HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath2);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  outputPath = `${groupdocs.outputFolder}/renderingTxt.jpg`;

  // TO JPG

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
  outputPath = `${groupdocs.outputFolder}/renderingTxt.png`;

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
  outputPath = `${groupdocs.outputFolder}/renderingTxt.pdf`;

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

module.exports = renderingTxt;
