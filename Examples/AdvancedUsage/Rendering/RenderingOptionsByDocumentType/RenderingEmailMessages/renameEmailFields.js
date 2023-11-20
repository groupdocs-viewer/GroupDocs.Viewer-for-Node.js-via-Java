async function renameEmailFields(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputFolder = `${groupdocs.outputFolder}/renameEmailFields`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const field = groupdocs.viewer.Field;
  const map = {}
  map[field.FROM] = "Sender";
  map[field.TO] = "Receiver";
  map[field.SENT] = "Date";
  map[field.SUBJECT] = "Topic";


  const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions.getEmailOptions().setFieldTextMap(map);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputFolder}`
  );

  return view;
}

module.exports = renameEmailFields;
