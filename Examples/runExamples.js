const examples = require('./viewerExamples')

// CALL EXAMPLES
// NOTE: Please uncomment the example you want to try out
;(async () => {
  try {
    console.log('Start viewing files. \n')
    
    await examples.setLicenseFromFile()
    //await examples.setLicenseFromStream() 
    
    await Promise.all([
      
      // Basic usage
      examples.getViewInfo(),
      examples.getSupportedFileFormats(),
      examples.checkFileIsEncrypted(), 

      // // Render Document To Pdf
      examples.protectPdfDocument(),
      examples.renderToPdf(),
      examples.adjustQualityOfJpgImages(),

      // // Render Document To Image
      examples.renderToJPG(),
      examples.renderToPng(),
      examples.adjustImageSize(),
      examples.getTextCoordinates(),
      examples.renderForDisplayWithText(),
      examples.adjustQualityWhenRenderingToJpg(),

      // // Render Document To HTML
      examples.excludingFontsFromOutputHtml(),
      examples.minifyHtmlDocument(),
      examples.renderToHtmlWithEmbeddedResources(),
      examples.renderToHtmlWithExternalResources(),
      examples.renderToResponsiveHtml(),

      // // Processing Attachments
      examples.retrieveAndPrintDocumentAttachments(),
      // // Extract Text
      examples.extractTextFromPdfFile(),

      // Advanced usage
      // Common Rendering
      examples.addWatermark(),
      examples.flipRotatePages(),
      examples.renderDocumentWithComments(),
      examples.renderDocumentWithNotes(),
      examples.renderHiddenPages(),
      //  examples.renderNConsecutivePages(), // not working with array
      examples.renderSelectedPages(),
      examples.renderWithCustomFonts(), 
      examples.reorderPages(),
      examples.replaceMissingFont(),
      examples.rotatePages(),
      examples.setImageSizeLimits(),

      // Rendering Options By Document Type

      // // Rendering Archive Files
      examples.getViewInfoForArchiveFile(),
      examples.renderArchiveFolder(),
      examples.renderingArchivesToMultipleAndSinglePagesHtml(),
      examples.specifyFilenameWhenRenderingArchiveFiles(),
      examples.renderingRar(),

      // // Rendering Email Messages
      examples.adjustPageSize(),
      examples.dateTimeFormatAndTimeZoneOffset(),
      examples.renameEmailFields(),


      // // Rendering Image Files
      examples.renderingAi(),
      examples.renderingApng(),
      examples.renderingCdr(),
      examples.renderingCmx(),
      examples.renderingEmzAndEmf(),
      examples.renderingSvgAndSvgz(),
      examples.renderingTga(),
      examples.renderingWmzAndWmf(),

      // // Rendering Pdf Documents
      examples.adjustImageQuality(),
      examples.disableCharactersGrouping(),
      examples.disableTextSelection(),
      examples.enableFontHinting(),
      examples.enableLayeredRendering(), 
      examples.getViewInfoForPdfDocument(),
      examples.renderOriginalPageSize(),

      // // Rendering Spreadsheets
      examples.adjustTextOverflowInCells(),
      examples.getWorksheetsNames(),
      examples.renderGridLines(),
      examples.renderHiddenRowsAndColumns(),
      examples.renderingByPageBreaks(), 
      examples.renderPrintAreas(), 
      examples.renderRowAndColumnHeadings(),
      examples.renderingNumbers(),
      examples.renderingXmlSpreadSheetML(),
      examples.skipRenderingOfEmptyColumns(),
      examples.skipRenderingOfEmptyRows(),
      examples.splitWorksheetsIntoPagesByRows(),
      examples.splitWorksheetsIntoPagesByRowsAndColumns(),
      
      // // Rendering Text Documents
      examples.renderingTxt(),
      
      // // Rendering Web Documents
      examples.renderingChmFiles(), 
      examples.renderingHtmlWithUserDefinedMargins(), 

      // // Rendering Word Processing Documents
      examples.renderTrackedChanges(),

      // // Rendering Lotus Notes Data Files
      examples.renderingNsf(),
      
      // // Rendering Ms Project Documents
      examples.adjustTimeUnit(),
      examples.getViewInfoForProjectDocument(),
      examples.renderProjectTimeInterval(),
      
      // // Rendering Outlook Data Files
      examples.filterMessages(),
      examples.getViewInfoForOutlookDataFile(),
      examples.limitCountOfItemsToRender(),
      examples.renderOutlookDataFileFolder(),

      // // Rendering Cad Drawings
      examples.adjustOutputImageSize(),
      examples.getViewInfoForCadDrawing(),
      examples.renderAllLayouts(),
      examples.renderLayers(), 
      examples.renderSingleLayout(),
      examples.setImageBackgroundColor(), 
      examples.renderingPc3Files(),
      examples.renderingNotes(),
      examples.renderingIgs(),
      examples.renderingHpg(),
      examples.renderingFodgAndOdg(),
      examples.renderingCf2(),
      examples.renderingPlt(),
      examples.renderingPstAndOst(),

      // Loading
      examples.loadDocumentsWithCharset(),
      examples.loadDocumentsWithEncoding(),
      examples.loadPasswordProtectedDocument(),
      examples.setResourceLoadingTimeout(),
      examples.specifyFileTypeWhenLoadingDocument(),
      
      // Loading Documents From Different Sources
     examples.loadDocumentFromLocalDisk(),
     examples.loadDocumentFromStream(),
     examples.loadDocumentFromUrl(), 
    ])
    console.log('The end of process.')
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()




