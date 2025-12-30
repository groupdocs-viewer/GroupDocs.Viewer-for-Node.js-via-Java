import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer';

const viewInfoOptions = ViewInfoOptions.forHtmlView();
viewInfoOptions.setExtractText(true)

const viewer = new Viewer("resume.pdf")
const viewInfo = viewer.getViewInfo(viewInfoOptions)

// Retrieve text from the PDF file.
viewInfo.getPages().toArray().forEach(function(page) {
  page.getLines().toArray().forEach(function(line){
    console.log(line.getValue())
    })  
  })

// Exit with a success code
process.exit(0);