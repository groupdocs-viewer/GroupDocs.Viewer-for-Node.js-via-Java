const fs = require('fs')
/**
 * This example demonstrates how to determine file type when you have file extension, media-type or stream.
 */

async function fromFileExtension(groupdocs) {
    const extension = ".docx"
    const fileType = groupdocs.viewer.FileType.fromExtension(extension)

    console.log("\nExtension " + extension + " File type: " + fileType)
}

async function fromMediaType(groupdocs) {
    const mediaType = "application/pdf"
    const fileType = groupdocs.viewer.FileType.fromMediaType(mediaType)

    console.log("\nMedia-type " + mediaType + " File type: " + fileType)
}

async function fromStream(groupdocs, sampleDocx) {
    const stream = fs.createReadStream(sampleDocx)
    const inputStream = await groupdocs.viewer.readDataFromStream(stream)   
    const fileType = groupdocs.viewer.FileType.fromStream(inputStream)

    console.log("\nFile path: " + sampleDocx + " File type: " + fileType)
}

module.exports = {
    fromFileExtension,
    fromMediaType,
    fromStream
}