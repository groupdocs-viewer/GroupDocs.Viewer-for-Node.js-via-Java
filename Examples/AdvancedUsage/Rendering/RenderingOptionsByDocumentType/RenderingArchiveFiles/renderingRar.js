
async function renderingRar(groupdocs, inputFilePath) {
  runToHtml(groupdocs, inputFilePath);
  runToJpg(groupdocs, inputFilePath);
  runToPng(groupdocs, inputFilePath);
  runToPdf(groupdocs, inputFilePath);

  getViewInfoForRar(groupdocs, inputFilePath);
  renderSpecificArchiveFolder(groupdocs, inputFilePath);
}

function runToHtml(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderingRar/runToHtml`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

function runToJpg(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderingRar/runToJpg`;
  const outputPath = `${outputFolder}/page_{0}.jpg`;

  const viewOptions =
    groupdocs.viewer.JpgViewOptions(outputPath);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

function runToPng(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderingRar/runToPng`;
  const outputPath = `${outputFolder}/page_{0}.png`;

  const viewOptions =
    groupdocs.viewer.PngViewOptions(outputPath);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

function runToPdf(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderingRar`;
  const outputPath = `${outputFolder}/runToPdf.pdf`;

  const viewOptions =
    groupdocs.viewer.PngViewOptions(outputPath);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

function getViewInfoForRar(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions;
  const info = viewer.getViewInfo(viewInfoOptions.forHtmlView());

  console.log("File type: " + info.getFileType());
  console.log("Pages count: " + info.getPages().size());

  console.log("Folders: ");
  console.log(" - /");

  const rootFolder = "";
  readFolders(groupdocs, viewer, rootFolder);
  console.log('\nView info retrieved successfully.');
}

function renderSpecificArchiveFolder(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renderingRar/renderSpecificArchiveFolder`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

  viewOptions.getArchiveOptions().setFolder("with_folders\\ThirdFolderWithItems");
  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

function readFolders(groupdocs, viewer, folder) {
  const viewInfoOptions = groupdocs.viewer.ViewInfoOptions;
  const options = viewInfoOptions.forHtmlView();
  options.getArchiveOptions().setFolder(folder);

  const viewInfo = viewer.getViewInfo(options);
  const folders = viewInfo.getFolders();

  for (let i = 0; i < folders.size(); i++) {
    const folderItem = folders.get(i);
    console.log(" - " + folderItem);

    readFolders(groupdocs, viewer, folderItem);
  }
}

module.exports = renderingRar;
