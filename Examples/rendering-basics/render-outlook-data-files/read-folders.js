import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer'

function readFolders(viewer, viewInfoOptions, folder) {
  viewInfoOptions.getOutlookOptions().setFolder(folder)

  const viewInfo = viewer.getViewInfo(viewInfoOptions)
  const folders = viewInfo.getFolders()

  for (let i = 0; i < folders.size(); i++) {
    console.log(' - ', folders.get(i).toString())
    readFolders(viewer, viewInfoOptions, folders.get(i).toString())
  }
}

const viewer = new Viewer('sample.pst')

const viewInfoOptions = ViewInfoOptions.forHtmlView()
const viewInfo = viewer.getViewInfo(viewInfoOptions)

// Display information about the PST file.
console.log('File type: ' + viewInfo.getFileType())
console.log('Pages count: ' + viewInfo.getPages().size())
// Display the list of folders that the PST file contains.
console.log('The file contains the following folders:')
console.log(' - /')
readFolders(viewer, viewInfoOptions, '')

// Exit with a success code
process.exit(0)