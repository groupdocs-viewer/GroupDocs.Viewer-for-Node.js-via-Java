async function retrieveAndPrintDocumentAttachments(groupdocs, inputFilePath) {
  const viewer = new groupdocs.viewer.Viewer(inputFilePath);

  const attachments = viewer.getAttachments();
  console.log("Attachments.\n");
  
  for (let i = 0; i < attachments.size(); i++) {
    console.log(attachments.get(i).toString());
  }
  console.log("\nAttachments retrieved successfully.");
}

module.exports = retrieveAndPrintDocumentAttachments;
