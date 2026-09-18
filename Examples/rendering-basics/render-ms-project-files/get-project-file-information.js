import { Viewer, ViewInfoOptions } from '@groupdocs/groupdocs.viewer'
import '#license'

const viewer = new Viewer('SoftwareDevelopmentPlan.mpp')

const viewInfoOptions = ViewInfoOptions.forHtmlView()
const viewInfo = viewer.getViewInfo(viewInfoOptions)

console.log('File type: ' + viewInfo.getFileType())
console.log('Pages count: ' + viewInfo.getPages().size())
console.log('Project start date: ' + viewInfo.getStartDate())
console.log('Project end date: ' + viewInfo.getEndDate())

// Exit with a success code
process.exit(0)