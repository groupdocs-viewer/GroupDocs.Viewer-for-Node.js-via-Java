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
const setLicense = require('./QuickStart/setLicense')


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
    return getViewInfo(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async getSupportedFileFormats(inputFilePath = '') {
    return getSupportedFileFormats(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async setLicense(licensePath = '') {
    if (this.licensePath) return setLicense(this, licensePath || this.licensePath)
  }

  async checkFileIsEncrypted(inputFilePath = '') {
    return checkFileIsEncrypted(this, inputFilePath || this.inputFiles.sampleDocxPasswordProtected)
  }

  async protectPdfDocument(inputFilePath = '') {
    return protectPdfDocument(this, inputFilePath || this.inputFiles.sampleDocx)
  }

  async protectPdfDocument(inputFilePath = '') {
    return protectPdfDocument(this, inputFilePath || this.inputFiles.sampleDocx)
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
    return extractTextFromPdfFile(this, inputFilePath || this.inputFiles.samplePdf)
  }
  

  async addWatermark(inputFilePath = '') {
    return addWatermark(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async flipRotatePages(inputFilePath = '') {
    return flipRotatePages(this, inputFilePath || this.inputFiles.sampleDocx)
  }
  
  async renderDocumentWithComments(inputFilePath = '') {
    return renderDocumentWithComments(this, inputFilePath || this.inputFiles.sampleDocxComment)
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

  async renderWithCustomFonts(inputFilePath = '', fontPath = '') {
    return renderWithCustomFonts(this, inputFilePath || this.inputFiles.missingFontPptx, fontPath || this.inputFiles.fontPath)
  }

  async getViewInfoForPdfDocument(inputFilePath = '') {
    return getViewInfoForPdfDocument(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async enableFontHinting(inputFilePath = '') {
    return enableFontHinting(this, inputFilePath || this.inputFiles.hieroglyphs1Pdf)
  }
 
  async enableLayeredRendering(inputFilePath = '') {
    return enableLayeredRendering(this, inputFilePath || this.inputFiles.samplePdf)
  }

  async renderOriginalPageSize(inputFilePath = '') {
    return renderOriginalPageSize(this, inputFilePath || this.inputFiles.samplePdf)
  }
  
}

module.exports = new ViewerExamples()