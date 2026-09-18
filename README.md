# GroupDocs.Viewer for Node.js via Java - Code Examples

[Product Page](https://products.groupdocs.com/viewer/nodejs-java/) | [Docs](https://docs.groupdocs.com/viewer/nodejs-java/) | [Demos](https://products.groupdocs.app/viewer/family) | [API Reference](https://references.groupdocs.com/viewer/) | [Blog](https://blog.groupdocs.com/category/viewer/) | [Search](https://search.groupdocs.com/) | [Free Support](https://forum.groupdocs.com/c/viewer) | [Temporary License](https://purchase.groupdocs.com/temporary-license)

[GroupDocs.Viewer for Node.js via Java](https://products.groupdocs.com/viewer/nodejs-java/) is a powerful document rendering API that helps you build high-performance document viewer applications in Node.js. Convert and preview popular file formats — including DOCX, XLSX, PPTX, PDF, CAD drawings, emails, archives, and many more — to HTML, PDF, PNG, and JPEG without installing Microsoft Office or other third-party software.

These ready-to-run code examples show how to integrate GroupDocs.Viewer into your Node.js projects quickly and explore the most common rendering scenarios.

## Features

- **Wide Format Support**: Render Microsoft Office documents, PDFs, OpenDocument files, images, emails, archives, CAD drawings, and more.
- **Flexible Output Formats**: Generate HTML (embedded or external resources), PDF, PNG, and JPEG from a single API.
- **Smart Format Detection**: Automatically detect the input file type and apply the right rendering options.
- **Rich Rendering Options**: Control page size, resolution, watermarks, comments, notes, CAD layouts, Outlook folders, and other document-specific settings.
- **Cross-Platform**: Works on Windows, Linux, and macOS with Node.js and a Java runtime.

## Supported File Formats

GroupDocs.Viewer for Node.js via Java supports a wide range of file formats, including Word, Excel, PowerPoint, PDF, OpenDocument, Image, Email, Visio, Project, EPUB, archives, CAD, and many others. See the [full list of supported formats](https://docs.groupdocs.com/viewer/nodejs-java/supported-file-formats/) for details.

## Get Started

1. **Set Up Environment**: Ensure that [Node.js 20 LTS](https://nodejs.org/) (or newer) and a compatible Java runtime are installed on your system.

2. **Get the Code**: Clone or download this repository.

   ```bash
   git clone git@github.com:groupdocs-viewer/GroupDocs.Viewer-for-Node.js-via-Java.git
   ```

3. **Navigate to the `Examples` Folder**

   ```bash
   cd ./GroupDocs.Viewer-for-Node.js-via-Java/Examples
   ```

4. **Install Package**: Run `npm install` to install `@groupdocs/groupdocs.viewer` and related dependencies. We typically keep the package aligned with the latest release. If you need a different version, update `package.json` accordingly.

   Alternatively, download the `tgz` package from the official [GroupDocs Releases](https://releases.groupdocs.com/viewer/nodejs-java/#direct-download) page, copy it into the `Examples` directory, and install it manually:

   ```bash
   npm install ./groupdocs.viewer-*.tgz
   ```

   **Note for Windows / Visual Studio 2026:** this project uses `node-gyp@12+` (via `overrides`) to build the native Java bridge. If installation fails because files are locked, close the IDE and retry, or run `npm run rebuild:java`. If the Viewer JAR under `node_modules/@groupdocs/groupdocs.viewer/lib` is only a few hundred bytes (download failed), place `groupdocs-viewer-nodejs-*.jar` into that folder and run `npm run postinstall`.

5. **Configure License (Optional)**: To unlock the full feature set without evaluation limitations, place your `.lic` file into the `Examples/license` folder. The examples apply it automatically. You can also [get a temporary license](https://purchase.groupdocs.com/temporary-license) to evaluate all features.

6. **Run the Examples**: To run the full set of examples, execute:

   ```bash
   npm start
   ```

   You can also run individual example scripts with Node.js. Rendered output files are saved to the `Examples/output` folder.

## More Resources

Explore detailed guides, API references, and additional samples in the [GroupDocs.Viewer for Node.js via Java documentation](https://docs.groupdocs.com/viewer/nodejs-java/).

We also offer **GroupDocs.Viewer** for other platforms:
* [**GroupDocs.Viewer for .NET**](https://products.groupdocs.com/viewer/net/)
* [**GroupDocs.Viewer for Java**](https://products.groupdocs.com/viewer/java/)
* [**GroupDocs.Viewer for Python via .NET**](https://products.groupdocs.com/viewer/python-net/)

---

[Product Page](https://products.groupdocs.com/viewer/nodejs-java/) | [Docs](https://docs.groupdocs.com/viewer/nodejs-java/) | [Demos](https://products.groupdocs.app/viewer/family) | [API Reference](https://references.groupdocs.com/viewer/) | [Blog](https://blog.groupdocs.com/category/viewer/) | [Search](https://search.groupdocs.com/) | [Free Support](https://forum.groupdocs.com/c/viewer) | [Temporary License](https://purchase.groupdocs.com/temporary-license)
