/**
 * This example demonstrates how to render Excel 2003 SpreadSheetML XML document into HTML, JPG, PNG, PDF.
 */
async function renderingXmlSpreadSheetML(groupdocs, inputFilePath) {
  let outputPath = `${groupdocs.outputFolder}/renderingXmlSpreadSheetML.html`;
  const fileType = groupdocs.viewer.FileType;

  /* Because the XML extension is associated with both an XML text document and Excel 2003 XML SpreadSheetML,
   * please specify the Excel2003XML fileType explicitly to render it as Excel 2003 XML SpreadSheetML.
   */

  const loadOptions = new groupdocs.viewer.LoadOptions(fileType.EXCEL_2003_XML);

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
  outputPath = `${groupdocs.outputFolder}/renderingXmlSpreadSheetML.jpg`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath, loadOptions);
    const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
  // TO PNG
  outputPath = `${groupdocs.outputFolder}/renderingXmlSpreadSheetML.png`;

  try {
    const viewer = new groupdocs.viewer.Viewer(inputFilePath, loadOptions);
    const viewOptions = groupdocs.viewer.PngViewOptions(outputPath);
    viewer.view(viewOptions);
  } catch (error) {
    console.log(error);
  }
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );
  // TO PDF
  outputPath = `${groupdocs.outputFolder}/renderingXmlSpreadSheetML.pdf`;

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

module.exports = renderingXmlSpreadSheetML;
