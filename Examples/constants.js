const path = require("path");
const SamplePath = path.join(__dirname, "./Resources/SampleFiles");
const FontsFolderPath = path.join(__dirname, "./Resources/Fonts");

module.exports = {
  LicensePath: '',
  SamplePath,
  FontsFolderPath,
  OutputPath: path.join(__dirname, "Output"),

  FONT_PATH: path.join(FontsFolderPath, "terminal-grotesque_open.otf"),
  SAMPLE_ZIP: SamplePath + "/sample.zip",
  SAMPLE_ZIP_WITH_FOLDERS: SamplePath + "/with_folders.zip",
  SAMPLE_RAR_WITH_FOLDERS: SamplePath + "/with_folders.rar",

  // CAD drawings
  SAMPLE_DWG_WITH_LAYOUTS_AND_LAYERS:
    SamplePath + "/with_layers_and_layouts.dwg",
  SAMPLE_PLT: SamplePath + "/sample.plt",
  SAMPLE_AI: SamplePath + "/sample.ai",
  SAMPLE_CF2: SamplePath + "/sample.cf2",
  SAMPLE_IGS: SamplePath + "/sample.igs",
  SAMPLE_OBJ: SamplePath + "/sample.obj",
  SAMPLE_HPG: SamplePath + "/sample.hpg",
  SAMPLE_PC3_CONFIG: SamplePath + "/small_page.pc3",

  // Email messages
  SAMPLE_MSG: SamplePath + "/sample.msg",
  SAMPLE_MSG_WITH_ATTACHMENTS: SamplePath + "/with_attachments.msg",
  SAMPLE_OST: SamplePath + "/sample.ost",
  SAMPLE_PST: SamplePath + "/sample.pst",
  SAMPLE_OST_SUBFOLDERS: SamplePath + "/with_subfolders.ost",
  SAMPLE_NSF: SamplePath + "/sample.nsf",
  SAMPLE_EML: SamplePath + "/sample.eml",

  // PDFs
  SAMPLE_PDF: SamplePath + "/sample.pdf",
  HIEROGLYPHS_PDF: SamplePath + "/hieroglyphs.pdf",
  HIEROGLYPHS_1_PDF: SamplePath + "/hieroglyphs_1.pdf",
  ENCRYPTED: SamplePath + "/encrypted.pdf",
  ONE_PAGE_TEXT_PDF: SamplePath + "/one-page-text.pdf",
  SAMPLE_SHORT: SamplePath + "/sample-short.pdf",

  // Presentations
  PPTX_WITH_NOTES: SamplePath + "/with_notes.pptx",
  SAMPLE_PPTX_HIDDEN_PAGE: SamplePath + "/with_hidden_page.pptx",
  MISSING_FONT_PPTX: SamplePath + "/with_missing_font.pptx",
  JPG_IMAGE_PPTX: SamplePath + "/with_jpg_image.pptx",
  SAMPLE_FODP: SamplePath + "/sample.fodp",

  // Project Management documents
  SAMPLE_MPP: SamplePath + "/sample.mpp",
  // Visio files
  SAMPLE_VISIO: SamplePath + "/sample.vssx",

  // Spreadsheets
  SAMPLE_XLSX: SamplePath + "/sample.xlsx",
  SAMPLE_XLSX_WITH_PRINT_AREAS: SamplePath + "/with_four_print_areas.xlsx",
  PAGE_BREAKS_XLSX: SamplePath + "/page-breaks.xlsx",
  SAMPLE_XLSX_WITH_EMPTY_COLUMN: SamplePath + "/with_empty_column.xlsx",
  SAMPLE_XLSX_WITH_EMPTY_ROW: SamplePath + "/with_empty_row.xlsx",
  SAMPLE_XLSX_WITH_HIDDEN_ROW_AND_COLUMN:
    SamplePath + "/with_hidden_row_and_column.xlsx",
  SAMPLE_XLSX_WITH_TEXT_OVERFLOW: SamplePath + "/with_overflowing_text.xlsx",
  THREE_SHEETS: SamplePath + "/three_sheets.xlsx",
  SAMPLE_NUMBERS: SamplePath + "/sample.numbers",
  SAMPLE_XML_SPREADSHEETML: SamplePath + "/excel-2003-xml.xml",
  TWO_PAGES_XLSX: SamplePath + "/two-pages.xlsx",
  FOUR_PAGES_XLSX: SamplePath + "/four-pages.xlsx",

  // Word Processing documents

  SAMPLE_DOCX: SamplePath + "/sample.docx",
  SAMPLE_DOCX_WITH_COMMENT: SamplePath + "/with_comment.docx",
  SAMPLE_DOCX_WITH_PASSWORD: SamplePath + "/password_protected.docx",
  SAMPLE_DOCX_WITH_TRACKED_CHANGES: SamplePath + "/with_tracked_changes.docx",
  SAMPLE_TXT_SHIFT_JS_ENCODED: SamplePath + "/shift_jis_encoded.txt",
  WITH_EXTERNAL_IMAGE_DOC: SamplePath + "/with_external_image.doc",
  SAMPLE_HTML: SamplePath + "/sample.html",

  // Text
  SAMPLE_TXT: SamplePath + "/sample.txt",

  SAMPLE_2_TXT: SamplePath + "/sample2.txt",

  // Graphics
  MISSING_FONT_ODG: SamplePath + "/with_missing_font.odg",
  SAMPLE_FODG: SamplePath + "/sample.fodg",
  SAMPLE_SVGZ: SamplePath + "/sample.svgz",
  SAMPLE_WMZ: SamplePath + "/sample.wmz",
  SAMPLE_EMZ: SamplePath + "/sample.emz",
  SAMPLE_CDR: SamplePath + "/sample.cdr",
  SAMPLE_CMX: SamplePath + "/sample.cmx",
  SAMPLE_TGA: SamplePath + "/sample.tga",
  SAMPLE_APNG: SamplePath + "/sample.apng",

  // Web
  SAMPLE_CHM: SamplePath + "/sample.chm",

  SAMPLE_JPG: SamplePath + "/sample.jpg",
};
