async function protectPdfDocument(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const outputPath = `${groupdocs.outputFolder}/protectPdfDocument.pdf`;
  const viewOptions = new groupdocs.viewer.PdfViewOptions(outputPath);
  const permissions = groupdocs.viewer.Permissions;

  const security = new groupdocs.viewer.Security();
  security.setDocumentOpenPassword("o123");
  security.setPermissionsPassword("p123");
  security.setPermissions(permissions.ALLOW_ALL ^ permissions.DENY_PRINTING);
  viewOptions.setSecurity(security);

  const view = viewer.view(viewOptions);
  console.log(
    `\nSource document rendered successfully.\nCheck output in ${outputPath}`
  );

  return view;
}

module.exports = protectPdfDocument;
