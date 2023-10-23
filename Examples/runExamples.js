const examples = require('./viewerExamples')

// CALL EXAMPLES


;(async () => {
  try {
    console.log('Start view. \nIn Main() method uncomment the example that you want to run.')
    await examples.setLicense() // You can pass the licensePath as an argument, it's optional

    await Promise.all([
      // NOTE: Please uncomment the example you want to try out
      // Basic usage
      // examples.getViewInfo(),
      // examples.getSupportedFileFormats(),
      // examples.checkFileIsEncrypted(),
      // examples.protectPdfDocument(),
      // examples.renderToPdf(),
      // examples.adjustQualityOfJpgImages(),
      // examples.renderToJPG(),
      // examples.renderToPng(),
      // examples.adjustImageSize(),
      // examples.getTextCoordinates(),
      // examples.renderForDisplayWithText(),
      // examples.excludingFontsFromOutputHtml(),
      // examples.minifyHtmlDocument(),
      // examples.renderToHtmlWithEmbeddedResources(),
      // examples.renderToHtmlWithExternalResources(),
      // examples.renderToResponsiveHtml(),
      // examples.retrieveAndPrintDocumentAttachments(),
      // examples.extractTextFromPdfFile(),

      // // Advanced usage
      // // Common Rendering
      // examples.addWatermark(),
      // examples.flipRotatePages(),
      // examples.renderDocumentWithComments(),
      // examples.renderDocumentWithNotes(),
      // examples.renderHiddenPages(),
      // examples.replaceMissingFont(),
      // examples.setImageSizeLimits(),

      // // Rendering PDF Documents
      // examples.adjustImageQuality(),
      // examples.getViewInfoForPdfDocument(),
      // examples.renderOriginalPageSize()


    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()