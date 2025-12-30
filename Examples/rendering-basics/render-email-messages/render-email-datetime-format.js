import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';
import java from 'java';

const timeOffset = java.import("java.util.TimeZone").getTimeZone("GMT+1")

const viewer = new Viewer("sample.eml")
// Create an HTML file
const viewOptions = HtmlViewOptions.forEmbeddedResources("render-email-datetime-format/eml-to-html.html")
// Apply a custom format to the date in the email message header.
viewOptions.getEmailOptions().setDateTimeFormat("MM d yyyy HH:mm tt zzz");
// Specify the time zone offset. 
viewOptions.getEmailOptions().setTimeZoneOffset(timeOffset)

viewer.view(viewOptions)

// Exit with a success code
process.exit(0);