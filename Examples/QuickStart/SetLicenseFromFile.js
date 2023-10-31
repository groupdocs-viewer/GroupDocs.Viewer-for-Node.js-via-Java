const fs = require('fs')

/**
 * This example demonstrates how to set license from stream.
 */
async function setLicenseFromFile(groupdocs, licensePath) {
  try {
    const license = new groupdocs.viewer.License()
    await license.setLicense(licensePath);

    console.log('License set successfully.');
    } catch (err) {
      console.log(err)
      console.log("\nWe do not ship any license with this example. " +
        "\nVisit the GroupDocs site to obtain either a temporary or permanent license. " +
        "\nLearn more about licensing at https://purchase.groupdocs.com/faqs/licensing. " +
        "\nLearn how to request a temporary license at https://purchase.groupdocs.com/temporary-license.");
    }
}

module.exports = setLicenseFromFile
