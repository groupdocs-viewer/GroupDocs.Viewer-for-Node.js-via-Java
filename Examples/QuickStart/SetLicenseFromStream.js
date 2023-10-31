const fs = require('fs')

/**
 * This example demonstrates how to set license from stream.
 */
async function setLicenseFromStream(groupdocs, licensePath) {
  try {
    const license = new groupdocs.viewer.License()
    const licenseStream = fs.createReadStream(licensePath)
    
    const stream = await groupdocs.viewer.readDataFromStream(licenseStream)    
    await license.setLicense(stream);

    console.log('License set successfully.');
    } catch (err) {
      console.log(err)
      console.log("\nWe do not ship any license with this example. " +
        "\nVisit the GroupDocs site to obtain either a temporary or permanent license. " +
        "\nLearn more about licensing at https://purchase.groupdocs.com/faqs/licensing. " +
        "\nLearn how to request a temporary license at https://purchase.groupdocs.com/temporary-license.");
    }
}

module.exports = setLicenseFromStream
