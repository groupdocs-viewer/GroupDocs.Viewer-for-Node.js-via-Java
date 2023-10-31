
const java = require('java')
const URL = java.import('java.net.URL');

async function loadDocumentFromUrl(groupdocs, url) {
  const outputFolder = `${groupdocs.outputFolder}/loadDocumentFromUrl`;
  const outputPath = `${outputFolder}/page_{0}.html`;
  const viewOptions =
    groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

    try {
      const fileStream = new URL(url).openStream();
      const viewer = new groupdocs.viewer.Viewer(fileStream);
      const view = viewer.view(viewOptions);
  
      console.log(`\nSource document rendered successfully.\nCheck output in ${outputFolder}`);
      return view;
    } catch (error) {
      throw new Error(error)
    }
}

module.exports = loadDocumentFromUrl;
