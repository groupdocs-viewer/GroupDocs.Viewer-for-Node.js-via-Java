/**
 * This example demonstrates how to log to file or console.
 * TODO: toConsole method
 */

/**
 * Logging to console.
 */
async function toConsole(groupdocs, inputFilePath) {
    const viewerSettings = new groupdocs.viewer.ViewerSettings(new groupdocs.viewer.ConsoleLogger());

    const outputFolder = `${groupdocs.outputFolder}/howToLogging/toConsole`
    const outputPath = `${outputFolder}/page_{0}.html`

    const viewer = new groupdocs.viewer.Viewer(inputFilePath, viewerSettings) 
    const options = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath);

    viewer.view(options);
    

    console.log("\nSource document rendered successfully.\nCheck output in " + outputFolder);
}

/**
 * Logging to file.
*/
async function toFile(groupdocs, inputFilePath) {
    const viewerSettings = new groupdocs.viewer.ViewerSettings(new groupdocs.viewer.FileLogger("output.log"))

    const outputFolder = `${groupdocs.outputFolder}/howToLogging/toFile`
    const outputPath = `${outputFolder}/page_{0}.html`

    const viewer = new groupdocs.viewer.Viewer(inputFilePath, viewerSettings)
    const options = groupdocs.viewer.HtmlViewOptions.forEmbeddedResources(outputPath)
    viewer.view(options)
    
    console.log("\nSource document rendered successfully.\nCheck output in " + outputFolder)
}
module.exports = {
    toConsole,
    toFile
}