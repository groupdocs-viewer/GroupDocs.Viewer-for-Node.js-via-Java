async function getViewInfoForArchiveFile(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  
  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions;
  const viewInfo = viewer.getViewInfo(viewInfoOptions.forHtmlView());

  console.log("File type: " + viewInfo.getFileType());
  console.log("Pages count: " + viewInfo.getPages().size());
  console.log("Folders: ");
  console.log(" - /");
  const rootFolder = "";

  readFolders(viewer, viewInfoOptions, rootFolder);

  console.log("\nView info retrieved successfully.");
}

function readFolders(viewer, viewInfoOptions, folder) {
  const innerInfoOptions = viewInfoOptions.forHtmlView();
  innerInfoOptions.getArchiveOptions().setFolder(folder);

  const archiveViewInfo = viewer.getViewInfo(innerInfoOptions);
  const folders = archiveViewInfo.getFolders();

  for (let i = 0; i < folders.size(); i++) {
    console.log(" - ", folders.get(i).toString());
    readFolders(viewer, viewInfoOptions, folders.get(i).toString());
  }
}

module.exports = getViewInfoForArchiveFile;
