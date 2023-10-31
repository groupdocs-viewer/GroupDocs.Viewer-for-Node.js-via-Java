/**
 * This example demonstrates how to render CMX document into HTML, JPG, PNG, PDF.
 */

async function renderingCmx(groupdocs, inputFilePath) {
  let outputFolder = `${groupdocs.outputFolder}/renderingCmx/html`;
  let outputPath = `${outputFolder}/page_{0}.html`;

  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewer.view(viewOptions);

    // To render 2nd image, just specify
    //viewer.view(options,2);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO JPG
  outputFolder = `${groupdocs.outputFolder}/renderingCmx/jpg`;
  outputPath = `${outputFolder}/page_{0}.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    viewer.view(viewOptions);

    // To render 2nd image, just specify
    //viewer.view(options,2);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PNG
  outputFolder = `${groupdocs.outputFolder}/renderingCmx/png`;
  outputPath = `${outputFolder}/page_{0}.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    viewer.view(viewOptions);

    // To render 2nd image, just specify
    //viewer.view(options,2);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingCmx.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    viewer.view(viewOptions);

    // By default all images will be rendered in output.pdf, to render only 2nd image in output PDF
    //viewer.view(options,2);
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderingCmx;
