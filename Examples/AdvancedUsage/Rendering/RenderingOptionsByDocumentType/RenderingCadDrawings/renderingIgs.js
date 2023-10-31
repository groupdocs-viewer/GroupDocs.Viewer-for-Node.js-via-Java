/**
 * This example demonstrates how to render IGS document into HTML, JPG, PNG, PDF.
 */

async function renderingIgs(groupdocs, inputFilePath) {
  let outputPath = `${groupdocs.outputFolder}/renderingIgs.html`;

  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    //viewOptions.setCadOptions(CadOptions.forRenderingByScaleFactor(0.7f)); // Render image and reduce it by 30%
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidthAndHeight(400,400)); // Render image and set output size to 400x400
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidth(500)); // Render image, fix width by 500 px and recalculate height
    //viewOptions.setCadOptions(CadOptions.forRenderingByHeight(500)); // Render image, fix height by 500 px and recalculate width
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  // TO JPG
  outputPath = `${groupdocs.outputFolder}/renderingIgs.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    //viewOptions.setCadOptions(CadOptions.forRenderingByScaleFactor(0.7f)); // Render image and reduce it by 30%
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidthAndHeight(400,400)); // Render image and set output size to 400x400
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidth(500)); // Render image, fix width by 500 px and recalculate height
    //viewOptions.setCadOptions(CadOptions.forRenderingByHeight(500)); // Render image, fix height by 500 px and recalculate width
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  // TO PNG
  outputPath = `${groupdocs.outputFolder}/renderingIgs.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    //viewOptions.setCadOptions(CadOptions.forRenderingByScaleFactor(0.7f)); // Render image and reduce it by 30%
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidthAndHeight(400,400)); // Render image and set output size to 400x400
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidth(500)); // Render image, fix width by 500 px and recalculate height
    //viewOptions.setCadOptions(CadOptions.forRenderingByHeight(500)); // Render image, fix height by 500 px and recalculate width
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingIgs.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    //viewOptions.setCadOptions(CadOptions.forRenderingByScaleFactor(0.7f)); // Render image and reduce it by 30%
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidthAndHeight(400,400)); // Render image and set output size to 400x400
    //viewOptions.setCadOptions(CadOptions.forRenderingByWidth(500)); // Render image, fix width by 500 px and recalculate height
    //viewOptions.setCadOptions(CadOptions.forRenderingByHeight(500)); // Render image, fix height by 500 px and recalculate width
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderingIgs;
