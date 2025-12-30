import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.zip')

const viewInfoOptions = ViewInfoOptions.forHtmlView()
const viewInfo = viewer.getViewInfo(viewInfoOptions)
const folders = viewInfo.getFolders()

console.log('File type: ' + viewInfo.getFileType())
console.log('Pages count: ' + viewInfo.getPages().size())
console.log('Folders: ')
for (let i = 0; i < folders.size(); i++) {
  console.log(' - ', folders.get(i).toString())
}

// Exit with a success code
process.exit(0);