async function getWorksheetsNames(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions.forHtmlView();
  
  viewInfoOptions.setSpreadsheetOptions(
    groupdocs.viewer.SpreadsheetOptions.forOnePagePerSheet()
  );

  const viewInfo = viewer.getViewInfo(viewInfoOptions);
  console.log("Worksheets:");

  for (let i = 0; i < viewInfo.getPages().size(); i++) {
    console.log(
      " - Worksheet " +
        viewInfo.getPages().get(i).getNumber().toString() +
        " name '" +
        viewInfo.getPages().get(i).getName().toString() +
        "'"
    );
  }

  console.log(`\nSource document rendered successfully.\n`);
}

module.exports = getWorksheetsNames;
