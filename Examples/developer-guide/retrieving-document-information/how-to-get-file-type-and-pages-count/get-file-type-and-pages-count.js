import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("resume.pdf")
// Get file information.
const viewInfoOptions = ViewInfoOptions.forHtmlView()
const viewInfo = viewer.getViewInfo(viewInfoOptions)
console.log("Document type is: " + viewInfo.getFileType())
console.log("Pages count: " + viewInfo.getPages().size())

// Exit with a success code
process.exit(0);