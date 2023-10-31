/**
 * This example demonstrates how to render CHM document into HTML, JPG, PNG, PDF.
 */

async function renderingChmFiles(groupdocs, inputFilePath) {
  let outputFolder = `${groupdocs.outputFolder}/renderingChmFiles/html`;
  let outputPath = `${outputFolder}/page_{0}.html`;

  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

    viewOptions.setRenderToSinglePage(true); // Enable it if you want to convert all CHM content to single page

    //viewer.view(options,1,2,3); // Convert only 1,2,3 pages
    viewer.view(viewOptions); // Convert all pages
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO JPG
  outputFolder = `${groupdocs.outputFolder}/renderingChmFiles/jpg`;
  outputPath = `${outputFolder}/page_{0}.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);

    // viewer.view(viewOptions, 1, 2, 3); // Convert only 1,2,3 pages
    viewer.view(viewOptions); // Convert all pages
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PNG
  outputFolder = `${groupdocs.outputFolder}/renderingChmFiles/png`;
  outputPath = `${outputFolder}/page_{0}.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);

    // viewer.view(viewOptions, 1, 2, 3); // Convert only 1,2,3 pages
    viewer.view(viewOptions); // Convert all pages
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingChmFiles.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    viewer.view(viewOptions); // Convert all pages
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderingChmFiles;
