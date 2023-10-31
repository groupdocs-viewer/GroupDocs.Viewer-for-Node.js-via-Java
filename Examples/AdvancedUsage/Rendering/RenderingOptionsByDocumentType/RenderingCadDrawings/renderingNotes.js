/**
 * This example demonstrates how to render MS Project document into HTML, JPG, PNG, PDF with notes.
 */

async function renderingNotes(groupdocs, inputFilePath) {
  let outputPath = `${groupdocs.outputFolder}/renderingNotes.html`;

  // TO HTML
  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions =
      groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
    viewOptions.setRenderNotes(true);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  // TO JPG
  let outputFolder = `${groupdocs.outputFolder}/renderingNotes/jpg`;
  outputPath = `${outputFolder}/page_{0}.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    viewOptions.setRenderNotes(true);

    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PNG
  outputFolder = `${groupdocs.outputFolder}/renderingNotes/png`;
  outputPath = `${outputFolder}/page_{0}.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    viewOptions.setRenderNotes(true);

    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingNotes.pdf`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath);
    const viewOptions = groupdocs.viewer.PdfViewOptions(outputPath);
    viewOptions.setRenderNotes(true);

    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }

  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
}

module.exports = renderingNotes;
