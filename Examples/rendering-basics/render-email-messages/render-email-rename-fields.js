import { Viewer, HtmlViewOptions, Field } from '@groupdocs/groupdocs.viewer'

const viewer = new Viewer('sample.eml')
// Specify custom field labels.
const field = Field
const map = {}
map[field.FROM] = 'Sender'
map[field.TO] = 'Receiver'
map[field.SENT] = 'Date'
map[field.SUBJECT] = 'Email subject'
// Create an HTML file.
const viewOptions = HtmlViewOptions.forEmbeddedResources('render-email-rename-fields/eml-to-html.html')
viewOptions.getEmailOptions().setFieldTextMap(map)
viewer.view(viewOptions)

// Exit with a success code
process.exit(0)