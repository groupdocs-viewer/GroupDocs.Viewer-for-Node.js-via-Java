async function checkFileIsEncrypted(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  
  const fileInfo = viewer.getFileInfo();

  console.log("File type is: " + fileInfo.getFileType());
  console.log("File encrypted: " + fileInfo.isEncrypted());
}

module.exports = checkFileIsEncrypted;
