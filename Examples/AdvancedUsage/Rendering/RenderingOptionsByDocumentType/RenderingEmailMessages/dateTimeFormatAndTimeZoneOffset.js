async function dateTimeFormatAndTimeZoneOffset(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);
  const outputPath = `${groupdocs.outputFolder}/dateTimeFormatAndTimeZoneOffset.html`;

  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);
  viewOptions.getEmailOptions().setDateTimeFormat("MM d yyyy HH:mm tt zzz");
  viewOptions.getEmailOptions().setTimeZoneOffset(180); // SET TIME OFFSET IN MINUTES

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = dateTimeFormatAndTimeZoneOffset;
