

async function renderToHtmlWithExternalResources(groupdocs, inputFilePath){

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const pageFilePathFormat = `${groupdocs.outputFolder}/page_{0}.html`;
    const resourceFilePathFormat = `${groupdocs.outputFolder}/page_{0}_{1}`;
    const resourceUrlFormat = `${groupdocs.outputFolder}/page_{0}_{1}`;

    const viewOptions = groupdocs.viewer.HtmlViewOptions.forExternalResources(pageFilePathFormat, resourceFilePathFormat,
        resourceUrlFormat)


    console.log(`\nSource document rendered successfully.\nCheck output in ${groupdocs.outputFolder}`)
    return viewer.view(viewOptions)
  }
    
  module.exports = renderToHtmlWithExternalResources
    
  