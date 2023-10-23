
async function getTextCoordinates(groupdocs, inputFilePath) {

    const viewer = new groupdocs.viewer.Viewer(inputFilePath)
  
    const viewOptions = groupdocs.viewer.ViewInfoOptions.forPngView(true)
  
    const viewInfo =  viewer.getViewInfo(viewOptions)

    const pages = viewInfo.getPages();
    console.log(pages.size());
    for (let i = 0; i < pages.size(); i++) {
        const page = pages.get(i).getLines();
        
        console.log(`Page: ${i + 1}`);
        console.log("Text lines/words/characters:");
        
        for (let j = 0; j < page.size(); j++) {
            const line = page.get(j);
            console.log(line.getValue() + '\t');   
        }
    }

  }
    
  module.exports = getTextCoordinates
