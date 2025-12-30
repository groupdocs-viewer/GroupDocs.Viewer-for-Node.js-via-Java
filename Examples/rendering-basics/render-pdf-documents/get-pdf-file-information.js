import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer';

const viewInfoOptions = ViewInfoOptions.forHtmlView();
const viewer = new Viewer("resume.pdf")
const viewInfo = viewer.getViewInfo(viewInfoOptions)

// Display information about the PDF document.
console.log("File type: " + viewInfo.getFileType());
console.log("The number of pages: " + viewInfo.getPages().size());
console.log("Is printing allowed: " + viewInfo.isPrintingAllowed());

// Exit with a success code
process.exit(0);