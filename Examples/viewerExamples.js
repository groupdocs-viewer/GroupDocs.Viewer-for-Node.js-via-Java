const fs = require('fs')

const viewer = require('@groupdocs/groupdocs.viewer')

// Constant Variables 
const Constants = require('./constants')

// Basic Methods
const getViewInfo = require('./BasicUsage/getViewInfo')
const renderToPdf = require('./BasicUsage/RenderDocumentToPdf/renderToPdf')
const renderToJPG = require('./BasicUsage/RenderDocumentToImage/renderToJpg')
const renderToPng = require('./BasicUsage/RenderDocumentToImage/renderToPng')
const protectPdfDocument = require('./BasicUsage/RenderDocumentToPdf/protectPdfDocument')
const checkFileIsEncrypted = require('./BasicUsage/checkFileIsEncrypted')
const getSupportedFileFormats = require('./BasicUsage/getSupportedFileFormats')
const adjustQualityOfJpgImages = require('./BasicUsage/RenderDocumentToPdf/adjustQualityOfJpgImages')
const renderForDisplayWithText = require('./BasicUsage/RenderDocumentToImage/renderForDisplayWithText')
const adjustImageSize = require('./BasicUsage/RenderDocumentToImage/adjustImageSize')
const adjustQualityWhenRenderingToJpg = require('./BasicUsage/RenderDocumentToImage/adjustQualityWhenRenderingToJpg')
const getTextCoordinates = require('./BasicUsage/RenderDocumentToImage/getTextCoordinates')
const excludingFontsFromOutputHtml = require('./BasicUsage/RenderDocumentToHtml/excludingFontsFromOutputHtml')
const minifyHtmlDocument = require('./BasicUsage/RenderDocumentToHtml/minifyHtmlDocument')
const renderToHtmlWithEmbeddedResources = require('./BasicUsage/RenderDocumentToHtml/renderToHtmlWithEmbeddedResources')
const renderToHtmlWithExternalResources = require('./BasicUsage/RenderDocumentToHtml/renderToHtmlWithExternalResources')
const renderToResponsiveHtml = require('./BasicUsage/RenderDocumentToHtml/renderToResponsiveHtml')
const retrieveAndPrintDocumentAttachments = require('./BasicUsage/ProcessingAttachments/retrieveAndPrintDocumentAttachments')
const extractTextFromPdfFile = require('./BasicUsage/ExtractText/extractTextFromPdfFile')

// Advanced Methods
const addWatermark = require('./AdvancedUsage/Rendering/CommonRenderingOptions/addWatermark')
const flipRotatePages = require('./AdvancedUsage/Rendering/CommonRenderingOptions/flipRotatePages')
const renderDocumentWithComments = require('./AdvancedUsage/Rendering/CommonRenderingOptions/renderDocumentWithComments')
const renderDocumentWithNotes = require('./AdvancedUsage/Rendering/CommonRenderingOptions/renderDocumentWithNotes')
const renderHiddenPages = require('./AdvancedUsage/Rendering/CommonRenderingOptions/renderHiddenPages')
const renderNConsecutivePages = require('./AdvancedUsage/Rendering/CommonRenderingOptions/renderNConsecutivePages')
const renderSelectedPages = require('./AdvancedUsage/Rendering/CommonRenderingOptions/renderSelectedPages')
const reorderPages = require('./AdvancedUsage/Rendering/CommonRenderingOptions/reorderPages')
const replaceMissingFont = require('./AdvancedUsage/Rendering/CommonRenderingOptions/replaceMissingFont')
const rotatePages = require('./AdvancedUsage/Rendering/CommonRenderingOptions/rotatePages')
const setImageSizeLimits = require('./AdvancedUsage/Rendering/CommonRenderingOptions/setImageSizeLimits')
const adjustImageQuality = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPdfDocuments/adjustImageQuality')
const renderWithCustomFonts = require('./AdvancedUsage/Rendering/CommonRenderingOptions/renderWithCustomFonts')
const getViewInfoForPdfDocument = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPdfDocuments/getViewInfoForPdfDocument')
const enableFontHinting = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPdfDocuments/enableFontHinting')
const enableLayeredRendering = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPdfDocuments/enableLayerRendering')
const renderOriginalPageSize = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPdfDocuments/renderOriginalPageSize')
const setLicenseFromFile = require('./QuickStart/SetLicenseFromFile')
const setLicenseFromStream = require('./QuickStart/SetLicenseFromStream')
const disableCharactersGrouping = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPdfDocuments/disableCharactersGrouping') 
const disableTextSelection = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPdfDocuments/disableTextSelection')
const renderingAi = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingAi')
const renderingApng = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingApng')
const renderingCdr = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingCdr')
const renderingCmx = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingCmx')
const renderingEmzAndEmf = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingEmzAndEmf')
const renderingSvgAndSvgz = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingSvgAndSvgz')
const renderingTga = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingTga')
const renderingWmzAndWmf = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingImageFiles/renderingWmzAndWmf')

const renderingTxt = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingTextDocuments/renderingTxt')
const renderingChmFiles = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingWebDocuments/renderingChmFiles')
const renderingHtmlWithUserDefinedMargins = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingWebDocuments/renderingHtmlWithUserDefinedMargins')
const renderTrackedChanges = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingWordProcessingDocuments/renderTrackedChanges')
const getViewInfoForArchiveFile = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingArchiveFiles/getViewInfoForArchiveFile')
const renderArchiveFolder = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingArchiveFiles/renderArchiveFolder')
const adjustPageSize = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingEmailMessages/adjustPageSize')
const dateTimeFormatAndTimeZoneOffset = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingEmailMessages/dateTimeFormatAndTimeZoneOffset')
const adjustTextOverflowInCells = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/adjustTextOverflowInCells')
const getWorksheetsNames = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/getWorksheetsNames')
const renderGridLines = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/renderGridLines')
const renderPrintAreas = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/renderPrintAreas')
const renderHiddenRowsAndColumns = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/renderHiddenRowsAndColumns')
const renderRowAndColumnHeadings = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/renderRowAndColumnHeadings')
const renderingByPageBreaks = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/renderingByPageBreaks')
const renderingNumbers = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/renderingNumbers')
const renderingXmlSpreadSheetML = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/renderingXmlSpreadSheetML')
const skipRenderingOfEmptyColumns = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/skipRenderingOfEmptyColumns')
const skipRenderingOfEmptyRows = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/skipRenderingOfEmptyRows')
const splitWorksheetsIntoPagesByRows = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/splitWorksheetsIntoPagesByRows')
const splitWorksheetsIntoPagesByRowsAndColumns = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingSpreadsheets/splitWorksheetsIntoPagesByRowsAndColumns')
const renderingNsf = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingLotusNotesDataFiles/renderingNsf')
const adjustTimeUnit = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingMsProjectDocuments/adjustTimeUnit')
const getViewInfoForProjectDocument = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingMsProjectDocuments/getViewInfoForProjectDocument')
const renderProjectTimeInterval = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingMsProjectDocuments/renderProjectTimeInterval')
const filterMessages = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingOutlookDataFiles/filterMessages')
const getViewInfoForOutlookDataFile = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingOutlookDataFiles/getViewInfoForOutlookDataFile')
const limitCountOfItemsToRender = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingOutlookDataFiles/limitCountOfItemsToRender')
const renderOutlookDataFileFolder = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingOutlookDataFiles/renderOutlookDataFileFolder')
const renderingFodp = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingPresentationDocuments/renderingFodp')
const renderingVisioDocumentsFigures = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingVisioDocuments/renderingVisioDocumentsFigures')
const adjustOutputImageSize = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/adjustOutputImageSize')
const getViewInfoForCadDrawing = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/getViewInfoForCadDrawing')
const renderAllLayouts = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderAllLayouts')
const renderLayers = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderLayers')
const renderSingleLayout = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderSingleLayout')
const setImageBackgroundColor = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/setImageBackgroundColor')
const renderingPc3Files = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingPc3Files')
const renderingNotes = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingNotes')
const renderingIgs = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingIgs')
const renderingHpg = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingHpg')
const renderingFodgAndOdg = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingFodgAndOdg')
const renderingCf2 = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingCf2')
const renderingPlt = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingPlt')
const renderingPstAndOst = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingCadDrawings/renderingPstAndOst')
const renderingArchivesToMultipleAndSinglePagesHtml = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingArchiveFiles/renderingArchivesToMultipleAndSinglePagesHtml')
const specifyFilenameWhenRenderingArchiveFiles = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingArchiveFiles/specifyFilenameWhenRenderingArchiveFiles')
const renameEmailFields = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingEmailMessages/renameEmailFields')
const renderingRar = require('./AdvancedUsage/Rendering/RenderingOptionsByDocumentType/RenderingArchiveFiles/renderingRar')

const loadDocumentsWithCharset = require('./AdvancedUsage/Loading/loadDocumentsWithCharset')
const loadDocumentsWithEncoding = require('./AdvancedUsage/Loading/loadDocumentsWithEncoding')
const loadPasswordProtectedDocument = require('./AdvancedUsage/Loading/loadPasswordProtectedDocument')
const setResourceLoadingTimeout = require('./AdvancedUsage/Loading/setResourceLoadingTimeout')
const specifyFileTypeWhenLoadingDocument = require('./AdvancedUsage/Loading/specifyFileTypeWhenLoadingDocument')
const loadDocumentFromLocalDisk = require('./AdvancedUsage/Loading/LoadingDocumentsFromDifferentSources/loadDocumentFromLocalDisk')
const loadDocumentFromStream = require('./AdvancedUsage/Loading/LoadingDocumentsFromDifferentSources/loadDocumentFromStream')
const loadDocumentFromUrl = require('./AdvancedUsage/Loading/LoadingDocumentsFromDifferentSources/loadDocumentFromUrl')
class ViewerExamples {
  constructor() {
    // Initialize the License
    let lic = Constants.LicensePath
    if (!lic || !lic.endsWith('.lic')) console.log('License is not found, continuing with demo version!')
    else this.licensePath = lic

    // Initialize the model
    this.viewer = viewer

    // Initialize files
    this.initializeInputFiles()
    this.initializeOutputFolder()
  }

  initializeInputFiles() {
    this.inputFiles = {
      sampleZip: Constants.SAMPLE_ZIP,
      sampleZipWithFolders: Constants.SAMPLE_ZIP_WITH_FOLDERS,
      sampleRarWithFolders: Constants.SAMPLE_RAR_WITH_FOLDERS,

      // CAD drawings
      sampleDwgWithLayoutsAndLayers: Constants.SAMPLE_DWG_WITH_LAYOUTS_AND_LAYERS,
      samplePlt: Constants.SAMPLE_PLT,
      sampleAi: Constants.SAMPLE_AI,
      sampleCf2: Constants.SAMPLE_CF2,
      sampleIgs: Constants.SAMPLE_IGS,
      sampleObj: Constants.SAMPLE_OBJ,
      sampleHpg: Constants.SAMPLE_HPG,
      samplePc3Config: Constants.SAMPLE_PC3_CONFIG,

      // Email messages
      sampleMsg: Constants.SAMPLE_MSG,
      sampleMsgWithAttachments: Constants.SAMPLE_MSG_WITH_ATTACHMENTS,
      sampleOst: Constants.SAMPLE_OST,
      samplePst: Constants.SAMPLE_PST,
      sampleOstSubfolders: Constants.SAMPLE_OST_SUBFOLDERS,
      sampleNsf: Constants.SAMPLE_NSF,
      sampleEml: Constants.SAMPLE_EML,

      // PDFs
      samplePdf: Constants.SAMPLE_PDF,
      hieroglyphsPdf: Constants.HIEROGLYPHS_PDF,
      hieroglyphs1Pdf: Constants.HIEROGLYPHS_1_PDF,
      encrypted: Constants.ENCRYPTED,
      onePageTextPdf: Constants.ONE_PAGE_TEXT_PDF,
      sampleShort: Constants.SAMPLE_SHORT,

      // Presentations
      pptxWithNotes: Constants.PPTX_WITH_NOTES,
      samplePptxHiddenPage: Constants.SAMPLE_PPTX_HIDDEN_PAGE,
      missingFontPptx: Constants.MISSING_FONT_PPTX,
      jpgImagePptx: Constants.JPG_IMAGE_PPTX,
      sampleFodp: Constants.SAMPLE_FODP,

      // Project Management documents
      sampleMpp: Constants.SAMPLE_MPP,
      
      // Visio files
      sampleVisio: Constants.SAMPLE_VISIO,

      // Spreadsheets
      sampleXlsx: Constants.SAMPLE_XLSX,
      sampleXlsxWithPrintAreas: Constants.SAMPLE_XLSX_WITH_PRINT_AREAS,
      pageBreaksXlsx: Constants.PAGE_BREAKS_XLSX,
      sampleXlsxWithEmptyColumn: Constants.SAMPLE_XLSX_WITH_EMPTY_COLUMN,
      sampleXlsxWithEmptyRow: Constants.SAMPLE_XLSX_WITH_EMPTY_ROW,
      sampleXlsxWithHiddenRowAndColumn: Constants.SAMPLE_XLSX_WITH_HIDDEN_ROW_AND_COLUMN,
      sampleXlsxWithTextOverflow: Constants.SAMPLE_XLSX_WITH_TEXT_OVERFLOW,
      threeSheets: Constants.THREE_SHEETS,
      sampleNumbers: Constants.SAMPLE_NUMBERS,
      sampleXmlSpreadsheetml: Constants.SAMPLE_XML_SPREADSHEETML,
      twoPagesXlsx: Constants.TWO_PAGES_XLSX,
      fourPagesXlsx: Constants.FOUR_PAGES_XLSX,

      // Word Processing documents
      sampleDocx: Constants.SAMPLE_DOCX,      
      sampleDocxWithComment: Constants.SAMPLE_DOCX_WITH_COMMENT,
      sampleDocxWithPassword: Constants.SAMPLE_DOCX_WITH_PASSWORD,
      sampleDocxWithTrackedChanges: Constants.SAMPLE_DOCX_WITH_TRACKED_CHANGES,
      sampleTxtShiftJsEncoded: Constants.SAMPLE_TXT_SHIFT_JS_ENCODED,
      withExternalImageDoc: Constants.WITH_EXTERNAL_IMAGE_DOC,
      sampleHtml: Constants.SAMPLE_HTML,

      // Text
      sampleTxt: Constants.SAMPLE_TXT,

      sample2Txt: Constants.SAMPLE_2_TXT,

      // Graphics
      missingFontOdg: Constants.MISSING_FONT_ODG,
      sampleFodg: Constants.SAMPLE_FODG,
      sampleSvgz: Constants.SAMPLE_SVGZ,
      sampleWmz: Constants.SAMPLE_WMZ,
      sampleEmz: Constants.SAMPLE_EMZ,
      sampleCdr: Constants.SAMPLE_CDR,
      sampleCmx: Constants.SAMPLE_CMX,
      sampleTga: Constants.SAMPLE_TGA,
      sampleApng: Constants.SAMPLE_APNG,

      // Web
      sampleChm: Constants.SAMPLE_CHM,

      sampleJpg: Constants.SAMPLE_JPG,

      fontPath: Constants.FONT_PATH,
      fontsFolderPath: Constants.FontsFolderPath,
  
      sampleUrl: "https://cms.admin.containerize.com/templates/groupdocs/images/logos/groupdocs-logo.png",
    }
  }

  initializeOutputFolder() {
    this.outputFolder = Constants.OutputPath
    try {
      if (!fs.existsSync(this.outputFolder)) fs.mkdirSync(this.outputFolder)
    } catch (error) {
      console.error(error)
    }
  }

  async getViewInfo(inputFilePath = '') {
    return getViewInfo(this, inputFilePath || this.inputFiles.sampleShort)
  }

  async getSupportedFileFormats(inputFilePath = '') {
    return getSupportedFileFormats(this, inputFilePath || this.inputFiles.samplePdf)
  }
  
  async setLicenseFromFile(licensePath = '') {
    if (this.licensePath) return setLicenseFromFile(this, licensePath || this.licensePath)
  }

  async setLicenseFromStream(licensePath = '') {
    if (this.licensePath) return setLicenseFromStream(this, licensePath || this.licensePath)
  }

  async checkFileIsEncrypted(inputFilePath = '') {
    return checkFileIsEncrypted(this, inputFilePath || this.inputFiles.sampleDocxWithPassword)
  }

  async protectPdfDocument(inputFilePath = '') {
    return protectPdfDocument(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderSelectedPages(inputFilePath = '') {
    return renderSelectedPages(this, inputFilePath || this.inputFiles.sampleDocx)
  }  
  
  async renderToPdf(inputFilePath = '') {
    return renderToPdf(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async adjustQualityOfJpgImages(inputFilePath = '') {
    return adjustQualityOfJpgImages(this, inputFilePath || this.inputFiles.sampleJpg)
  }
  
  async renderToJPG(inputFilePath = '') {
    return renderToJPG(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderToPng(inputFilePath = '') {
    return renderToPng(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async renderToHtmlWithExternalResources(inputFilePath = '') {
    return renderToHtmlWithExternalResources(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async adjustImageSize(inputFilePath = '') {
    return adjustImageSize(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async getTextCoordinates(inputFilePath = '') {
    return getTextCoordinates(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderForDisplayWithText(inputFilePath = '') {
    return renderForDisplayWithText(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async excludingFontsFromOutputHtml(inputFilePath = '') {
    return excludingFontsFromOutputHtml(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async minifyHtmlDocument(inputFilePath = '') {
    return minifyHtmlDocument(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderToHtmlWithEmbeddedResources(inputFilePath = '') {
    return renderToHtmlWithEmbeddedResources(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderToResponsiveHtml(inputFilePath = '') {
    return renderToResponsiveHtml(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async retrieveAndPrintDocumentAttachments(inputFilePath = '') {
    return retrieveAndPrintDocumentAttachments(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async extractTextFromPdfFile(inputFilePath = '') {
    return extractTextFromPdfFile(this, inputFilePath || this.inputFiles.sampleShort)
  }

  async renderNConsecutivePages(inputFilePath = '') {
    return renderNConsecutivePages(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async adjustQualityWhenRenderingToJpg(inputFilePath = '') {
    return adjustQualityWhenRenderingToJpg(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async addWatermark(inputFilePath = '') {
    return addWatermark(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async flipRotatePages(inputFilePath = '') {
    return flipRotatePages(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderDocumentWithComments(inputFilePath = '') {
    return renderDocumentWithComments(this, inputFilePath || this.inputFiles.sampleDocxWithComment)
  }
  
  async renderDocumentWithNotes(inputFilePath = '') {
    return renderDocumentWithNotes(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderHiddenPages(inputFilePath = '') {
    return renderHiddenPages(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async reorderPages(inputFilePath = '') {
    return reorderPages(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async replaceMissingFont(inputFilePath = '') {
    return replaceMissingFont(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async adjustImageQuality(inputFilePath = '') {
    return adjustImageQuality(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async setImageSizeLimits(inputFilePath = '') {
    return setImageSizeLimits(this, inputFilePath || this.inputFiles.sampleCf2)
  }

  async renderWithCustomFonts(inputFilePath = '', fontsFolderPath = '') {
    return renderWithCustomFonts(this, inputFilePath || this.inputFiles.missingFontPptx, fontsFolderPath || this.inputFiles.fontsFolderPath)
  }

  async getViewInfoForPdfDocument(inputFilePath = '') {
    return getViewInfoForPdfDocument(this, inputFilePath || this.inputFiles.sampleShort)
  }

  async enableFontHinting(inputFilePath = '') {
    return enableFontHinting(this, inputFilePath || this.inputFiles.hieroglyphs1Pdf)
  }
 
  async enableLayeredRendering(inputFilePath = '') {
    return enableLayeredRendering(this, inputFilePath || this.inputFiles.sampleDwgWithLayoutsAndLayers)
  }

  async renderOriginalPageSize(inputFilePath = '') {
    return renderOriginalPageSize(this, inputFilePath || this.inputFiles.samplePdf)
  }
  
  async disableCharactersGrouping(inputFilePath = '') {
    return disableCharactersGrouping(this, inputFilePath || this.inputFiles.hieroglyphsPdf)
  }

  async disableTextSelection(inputFilePath = '') {
    return disableTextSelection(this, inputFilePath || this.inputFiles.onePageTextPdf)
  }

  async renderingAi(inputFilePath = '') {
    return renderingAi(this, inputFilePath || this.inputFiles.sampleAi)
  }

  async renderingApng(inputFilePath = '') {
    return renderingApng(this, inputFilePath || this.inputFiles.sampleApng)
  }

  async renderingCdr(inputFilePath = '') {
    return renderingCdr(this, inputFilePath || this.inputFiles.sampleCdr)
  }

  async renderingCmx(inputFilePath = '') {
    return renderingCmx(this, inputFilePath || this.inputFiles.sampleCmx)
  }

  async renderingEmzAndEmf(inputFilePath = '') {
    return renderingEmzAndEmf(this, inputFilePath || this.inputFiles.sampleEmz)
  }

  async renderingSvgAndSvgz(inputFilePath = '') {
    return renderingSvgAndSvgz(this, inputFilePath || this.inputFiles.sampleSvgz)
  }
  
  async renderingTga(inputFilePath = '') {
    return renderingTga(this, inputFilePath || this.inputFiles.sampleTga)
  }

  async renderingWmzAndWmf(inputFilePath = '') {
    return renderingWmzAndWmf(this, inputFilePath || this.inputFiles.sampleWmz)
  }

  async renderingTxt(inputFilePath1 = '', inputFilePath2 = '') {
    return renderingTxt(this, inputFilePath1 || this.inputFiles.sampleTxt, inputFilePath2 || this.inputFiles.sample2Txt )
  }

  async rotatePages(inputFilePath = '') {
    return rotatePages(this, inputFilePath || this.inputFiles.sampleDocx )
  }

  async renderingChmFiles(inputFilePath = '') {
    return renderingChmFiles(this, inputFilePath || this.inputFiles.sampleChm )
  }

  async renderingHtmlWithUserDefinedMargins(inputFilePath = '') {
    return renderingHtmlWithUserDefinedMargins(this, inputFilePath || this.inputFiles.sampleHtml )
  }

  async renderTrackedChanges(inputFilePath = '') {
    return renderTrackedChanges(this, inputFilePath || this.inputFiles.sampleDocxWithTrackedChanges )
  }

  async getViewInfoForArchiveFile(inputFilePath = '') {
    return getViewInfoForArchiveFile(this, inputFilePath || this.inputFiles.sampleZipWithFolders )
  }

  async renderArchiveFolder(inputFilePath = '') {
    return renderArchiveFolder(this, inputFilePath || this.inputFiles.sampleZipWithFolders )
  }

  async adjustPageSize(inputFilePath = '') {
    return adjustPageSize(this, inputFilePath || this.inputFiles.sampleMsg )
  }
  
  async dateTimeFormatAndTimeZoneOffset(inputFilePath = '') {
    return dateTimeFormatAndTimeZoneOffset(this, inputFilePath || this.inputFiles.sampleEml )
  }
  
  async adjustTextOverflowInCells(inputFilePath = '') {
    return adjustTextOverflowInCells(this, inputFilePath || this.inputFiles.sampleXlsxWithTextOverflow )
  }

  async getWorksheetsNames(inputFilePath = '') {
    return getWorksheetsNames(this, inputFilePath || this.inputFiles.threeSheets)
  }

  async renderGridLines(inputFilePath = '') {
    return renderGridLines(this, inputFilePath || this.inputFiles.sampleXlsx)
  }

  async renderHiddenRowsAndColumns(inputFilePath = '') {
    return renderHiddenRowsAndColumns(this, inputFilePath || this.inputFiles.sampleXlsxWithHiddenRowAndColumn)
  }

  async renderPrintAreas(inputFilePath = '') {
    return renderPrintAreas(this, inputFilePath || this.inputFiles.sampleXlsxWithPrintAreas)
  }

  async renderRowAndColumnHeadings(inputFilePath = '') {
    return renderRowAndColumnHeadings(this, inputFilePath || this.inputFiles.sampleXlsx)
  }

  async renderingByPageBreaks(inputFilePath = '') {
    return renderingByPageBreaks(this, inputFilePath || this.inputFiles.pageBreaksXlsx)
  }

  async renderingNumbers(inputFilePath = '') {
    return renderingNumbers(this, inputFilePath || this.inputFiles.sampleNumbers)
  }

  async renderingXmlSpreadSheetML(inputFilePath = '') {
    return renderingXmlSpreadSheetML(this, inputFilePath || this.inputFiles.sampleXmlSpreadsheetml)
  }
  
  async skipRenderingOfEmptyColumns(inputFilePath = '') {
    return skipRenderingOfEmptyColumns(this, inputFilePath || this.inputFiles.sampleXlsxWithEmptyColumn)
  }

  async skipRenderingOfEmptyRows(inputFilePath = '') {
    return skipRenderingOfEmptyRows(this, inputFilePath || this.inputFiles.sampleXlsxWithEmptyRow)
  }

  async splitWorksheetsIntoPagesByRows(inputFilePath = '') {
    return splitWorksheetsIntoPagesByRows(this, inputFilePath || this.inputFiles.twoPagesXlsx)
  }
  
  async splitWorksheetsIntoPagesByRowsAndColumns(inputFilePath = '') {
    return splitWorksheetsIntoPagesByRowsAndColumns(this, inputFilePath || this.inputFiles.fourPagesXlsx)
  }

  async renderingNsf(inputFilePath = '') {
    return renderingNsf(this, inputFilePath || this.inputFiles.sampleNsf)
  }
  
  async adjustTimeUnit(inputFilePath = '') {
    return adjustTimeUnit(this, inputFilePath || this.inputFiles.sampleMpp)
  }

  async getViewInfoForProjectDocument(inputFilePath = '') {
    return getViewInfoForProjectDocument(this, inputFilePath || this.inputFiles.sampleMpp)
  }

  async renderProjectTimeInterval(inputFilePath = '') {
    return renderProjectTimeInterval(this, inputFilePath || this.inputFiles.sampleMpp)
  }
  
  async filterMessages(inputFilePath = '') {
    return filterMessages(this, inputFilePath || this.inputFiles.sampleOstSubfolders)
  }

  async getViewInfoForOutlookDataFile(inputFilePath = '') {
    return getViewInfoForOutlookDataFile(this, inputFilePath || this.inputFiles.sampleOstSubfolders)
  }

  async limitCountOfItemsToRender(inputFilePath = '') {
    return limitCountOfItemsToRender(this, inputFilePath || this.inputFiles.sampleOst)
  }

  async renderOutlookDataFileFolder(inputFilePath = '') {
    return renderOutlookDataFileFolder(this, inputFilePath || this.inputFiles.sampleOstSubfolders)
  }
  
  async renderingFodp(inputFilePath = ''){
    return renderingFodp(this, inputFilePath || this.inputFiles.sampleFodp)
  }
  
  async renderingVisioDocumentsFigures(inputFilePath = ''){
    return renderingVisioDocumentsFigures(this, inputFilePath || this.inputFiles.sampleVisio)
  }
  
  async adjustOutputImageSize(inputFilePath = ''){
    return adjustOutputImageSize(this, inputFilePath || this.inputFiles.sampleDwgWithLayoutsAndLayers)
  }
  
  async getViewInfoForCadDrawing(inputFilePath = ''){
    return getViewInfoForCadDrawing(this, inputFilePath || this.inputFiles.sampleDwgWithLayoutsAndLayers)
  }

  async renderAllLayouts(inputFilePath = ''){
    return renderAllLayouts(this, inputFilePath || this.inputFiles.sampleDwgWithLayoutsAndLayers)
  }
  
  async renderLayers(inputFilePath = ''){
    return renderLayers(this, inputFilePath || this.inputFiles.sampleDwgWithLayoutsAndLayers)
  }
  
  async renderSingleLayout(inputFilePath = ''){
    return renderSingleLayout(this, inputFilePath || this.inputFiles.sampleDwgWithLayoutsAndLayers)
  }

  async setImageBackgroundColor(inputFilePath = ''){
    return setImageBackgroundColor(this, inputFilePath || this.inputFiles.sampleDwgWithLayoutsAndLayers)
  }

  async renderingPc3Files(inputFilePath1 = '', inputFilePath2 = ''){
    return renderingPc3Files(this, inputFilePath1 || this.inputFiles.sampleDwgWithLayoutsAndLayers, inputFilePath2 || this.inputFiles.samplePc3Config)
  }

  async renderingNotes(inputFilePath = ''){
    return renderingNotes(this, inputFilePath || this.inputFiles.sampleMpp)
  }

  async renderingIgs(inputFilePath = ''){
    return renderingIgs(this, inputFilePath || this.inputFiles.sampleIgs)
  }

  async renderingHpg(inputFilePath = ''){
    return renderingHpg(this, inputFilePath || this.inputFiles.sampleHpg)
  }

  async renderingFodgAndOdg(inputFilePath = ''){
    return renderingFodgAndOdg(this, inputFilePath || this.inputFiles.sampleFodg)
  }

  async renderingCf2(inputFilePath = ''){
    return renderingCf2(this, inputFilePath || this.inputFiles.sampleCf2)
  }

  async renderingPlt(inputFilePath = ''){
    return renderingPlt(this, inputFilePath || this.inputFiles.samplePlt)
  }

  async renderingPstAndOst(inputFilePath = ''){
    return renderingPstAndOst(this, inputFilePath || this.inputFiles.samplePst)
  }

  async loadDocumentsWithCharset(inputFilePath = ''){
    return loadDocumentsWithCharset(this, inputFilePath || this.inputFiles.sampleTxtShiftJsEncoded)
  }

  async loadDocumentsWithEncoding(inputFilePath = ''){
    return loadDocumentsWithEncoding(this, inputFilePath || this.inputFiles.sampleTxtShiftJsEncoded)
  }

  async loadPasswordProtectedDocument(inputFilePath = ''){
    return loadPasswordProtectedDocument(this, inputFilePath || this.inputFiles.sampleDocxWithPassword)
  }

  async setResourceLoadingTimeout(inputFilePath = ''){
    return setResourceLoadingTimeout(this, inputFilePath || this.inputFiles.withExternalImageDoc)
  }

  async specifyFileTypeWhenLoadingDocument(inputFilePath = ''){
    return specifyFileTypeWhenLoadingDocument(this, inputFilePath || this.inputFiles.sampleDocx)
  }
    
  async loadDocumentFromLocalDisk(inputFilePath = ''){
    return loadDocumentFromLocalDisk(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async loadDocumentFromStream(inputFilePath = ''){
    return loadDocumentFromStream(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async loadDocumentFromUrl(url = ''){
    return loadDocumentFromUrl(this, url || this.inputFiles.sampleUrl)
  }


  async renderingArchivesToMultipleAndSinglePagesHtml(inputFilePath = ''){
    return renderingArchivesToMultipleAndSinglePagesHtml(this, inputFilePath || this.inputFiles.sampleRarWithFolders)
  }

  async specifyFilenameWhenRenderingArchiveFiles(inputFilePath = ''){
    return specifyFilenameWhenRenderingArchiveFiles(this, inputFilePath || this.inputFiles.sampleZip)
  }

  async renameEmailFields(inputFilePath = ''){
    return renameEmailFields(this, inputFilePath || this.inputFiles.sampleMsg)
  }
  
  async renderingRar(inputFilePath = ''){
    return renderingRar(this, inputFilePath || this.inputFiles.sampleRarWithFolders)
  }

}

module.exports = new ViewerExamples()