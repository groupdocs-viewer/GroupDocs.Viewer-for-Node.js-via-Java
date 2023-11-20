const fs = require('fs')

/**
 * This example demonstrates how to set license from stream.
 */
async function setLicense(groupdocs, licensePath) {
  const lic = new groupdocs.viewer.License()
  const readStream = fs.createReadStream(licensePath)

  return new Promise((resolve, reject) =>
    // eslint-disable-next-line no-promise-executor-return
    groupdocs.viewer.License.setLicenseFromStream(lic, readStream, err => {
      if (err) {
        console.log(
          '\nWe do not ship any license with this example. ' +
            '\nVisit the GroupDocs site to obtain either a temporary or permanent license. ' +
            '\nLearn more about licensing at https://purchase.groupdocs.com/faqs/licensing. ' +
            '\nLear how to request temporary license at https://purchase.groupdocs.com/temporary-license.'
        )
        reject()
      } else {
        console.log('License set successfully.')
        resolve()
      }
    })
  )
}

module.exports = setLicense
