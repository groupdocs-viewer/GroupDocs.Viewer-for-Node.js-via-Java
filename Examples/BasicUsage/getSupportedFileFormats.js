async function getSupportedFileFormats(groupdocs, inputFilePath) {
  const viewer = groupdocs.viewer.FileType.getSupportedFileTypes();

  for (let i = 0; i < viewer.size(); i++) {
    console.log(viewer.get(i).toString());
  }
  
  console.log("\nSupported file types retrieved successfully.");
}

module.exports = getSupportedFileFormats;
