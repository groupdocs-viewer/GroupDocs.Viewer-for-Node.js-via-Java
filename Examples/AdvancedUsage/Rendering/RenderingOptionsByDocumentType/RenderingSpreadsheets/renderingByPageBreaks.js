/**
 * This example demonstrates how to render spreadsheets by page breaks.
 * More details at https://docs.groupdocs.com/viewer/net/render-spreadsheets-by-page-breaks/
 */
async function renderingByPageBreaks(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputPath = `${groupdocs.outputFolder}/renderingByPageBreaks.pdf`;

  const viewOptions = new groupdocs.viewer.PdfViewOptions(outputPath)
  viewOptions.setSpreadsheetOptions(groupdocs.viewer.SpreadsheetOptions.forRenderingByPageBreaks());

  // Enable rendering gird lines and headings to check that proper areas are rendered
  // viewOptions.getSpreadsheetOptions().setRenderGridLines(true);
  // viewOptions.getSpreadsheetOptions().setRenderHeadings(true);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = renderingByPageBreaks;
