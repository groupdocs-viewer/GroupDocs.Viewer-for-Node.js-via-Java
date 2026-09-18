import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer'
import '#license'

const viewer = new Viewer('sample.eml')
// Get email message info (from, subject, sent date, etc.).
const viewInfo = viewer.getViewInfo(ViewInfoOptions.forHtmlView())

console.log('File type: ' + viewInfo.getFileType())
console.log('Pages count: ' + viewInfo.getPages().size())
console.log('From: ' + viewInfo.getFrom())
console.log('Subject: ' + viewInfo.getSubject())
console.log('Sent: ' + viewInfo.getSent())

process.exit(0)
