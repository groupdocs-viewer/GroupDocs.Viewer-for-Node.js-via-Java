const fs = require("fs");

async function loadDocumentFromStream(groupdocs, inputFilePath) {
  const outputFolder = `${groupdocs.outputFolder}/loadDocumentFromStream`;
  const outputPath = `${outputFolder}/page_{0}.html`;

  try {
    const readStream = fs.createReadStream(inputFilePath)
    const stream = await groupdocs.viewer.readDataFromStream(readStream)

    const viewer = new groupdocs.viewer.Viewer(stream);    
    const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

    console.log(`\nSource document rendered successfully.\nCheck output in ${outputFolder}`)
    return viewer.view(viewOptions)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = loadDocumentFromStream;
