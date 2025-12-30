import { Viewer } from '@groupdocs/groupdocs.viewer';

const viewer = new Viewer("with_attachments.msg")
const attachments = viewer.getAttachments();
console.log('Attachments:\n');

for(let i = 0; i < attachments.size(); i++ ){
    console.log(attachments.get(i).toString());
}
console.log('\nAttachments retrieved successfully.');

// Exit with a success code
process.exit(0);