async function renderingPc3Files(groupdocs, inputFilePath1, inputFilePath2) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath1);
  const outputPath = `${groupdocs.outputFolder}/renderingPc3Files.jpg`;

  const viewOptions = new groupdocs.viewer.JpgViewOptions(outputPath);

  viewOptions.getCadOptions().setPc3File(inputFilePath2);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = renderingPc3Files;
