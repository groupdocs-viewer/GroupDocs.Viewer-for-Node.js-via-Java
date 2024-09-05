# Document Viewer API for Node.js

GroupDocs.Viewer for-Node.js-via-Java is a [Document Viewer API](https://products.groupdocs.com/viewer/java) for Java developers. It supports over 170 document types from popular categories such as Microsoft Office, OpenOffice, AutoCAD, Photoshop, Visio, images, metafiles, programming, archives, messages, PDF & more.

View PDF, DOC, PPT, ODT, OTT, ODP among [many other documents](https://docs.groupdocs.com/viewer/java/supported-document-formats/) in HTML5, PDF or image modes with fast and high quality rendering. You may also choose your own rendering strategy by processing the document page-by-page, entire document at once or a custom page range. API also provides the ability to customize document appearance via additional rendering options to add watermarks, rotate or reorder pages, extract document text and much more!

<p align="center">
  <a title="Download complete GroupDocs.Viewer for Node.js via Java source code" href="https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java/archive/master.zip"> 
    <img src="https://raw.github.com/AsposeExamples/java-examples-dashboard/master/images/downloadZip-Button-Large.png">
  </a>
</p>

Directory | Description
--------- | -----------
[Examples](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Node.js-via-Java/tree/master/Examples)  | Node.js examples and sample documents for you to get started quickly.


## Node.js Viewer API Features 
- Display document content in any web-browser.
- View document pages separately.
- Rotate, reorder pages or add watermarks.
- Customizable resource management options for CSS, fonts & images.
- Render all pages of a document as a single PDF.
- Boost document loading speed with configurable caching.
- Extract document text along with words' coordinates.
- Extract basic information about source documents such as file type, pages count and so on.
- Auto-detect document type.
- Replace missing font or use custom fonts for rendering.

## Supported File Formats
View documents in the [most popular file formats](https://docs.groupdocs.com/viewer/nodejs-java/supported-document-formats/) (DOCX, XLSX, PPTX, PDF, DWG, PSD, HTML, ZIP, and more) by rendering them as HTML, PDF, PNG, and JPEG files.

## Get Started with GroupDocs.Viewer-for-Node.js-via-Java

GroupDocs.Viewer-for-Node.js-via-Java requires J2SE 7.0 (1.7), J2SE 8.0 (1.8) or above. Please install Java first if you do not have it already.

GroupDocs hosts all Java APIs on [GroupDocs Artifact Repository](https://artifact.groupdocs.com/webapp/#/artifacts/browse/tree/General/repo/com/groupdocs/groupdocs-viewer), so simply [configure](https://docs.groupdocs.com/viewer/java/installation/) your Maven project to fetch the dependencies automatically.

### Installation

From the command line:

	npm install @groupdocs/groupdocs.viewer

### Run Examples

Change directory to Examples:

	cd Examples

Run runExamles.js:

	node runExamples.js


## View DOCX As Responsive HTML using Node.js

```js
const viewer = new groupdocs.viewer.Viewer("sample.docx")
const viewOptions = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources("output-responsive.html")
viewOptions.setRenderResponsive(true)
viewer.view(viewOptions)
```

### View DOCX As Protected PDF via Node.js

```js
const viewer = new groupdocs.viewer.Viewer("sample.docx");
const viewOptions = new groupdocs.viewer.PdfViewOptions("output-protect.pdf");
const permissions = groupdocs.viewer.Permissions;
const security = new groupdocs.viewer.Security();

security.setDocumentOpenPassword("o123");
security.setPermissionsPassword("p123");
security.setPermissions(permissions.ALLOW_ALL ^ permissions.DENY_PRINTING);

viewOptions.setSecurity(security);
viewer.view(viewOptions);
```

[Home](https://www.groupdocs.com/) | [Product Page](https://products.groupdocs.com/viewer/java) | [Documentation](https://docs.groupdocs.com/viewer/java/) | [Demo](https://products.groupdocs.app/viewer/family) | [API Reference](https://apireference.groupdocs.com/java/viewer) | [Examples](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java/tree/master/Examples) | [Blog](https://blog.groupdocs.com/category/viewer/) | [Search](https://search.groupdocs.com/) | [Free Support](https://forum.groupdocs.com/c/viewer) | [Temporary License](https://purchase.groupdocs.com/temporary-license)