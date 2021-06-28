const { google } = require('googleapis')

const API_KEY = process.env.GOOGLE_API_KEY

const sendOTP = async (phoneNumber, recaptchaToken) => {
  const identityToolkit = google.identitytoolkit({
    auth: API_KEY,
    version: 'v3'
  })

  const response = await identityToolkit.relyingparty.sendVerificationCode({
    phoneNumber,
    recaptchaToken
  })

  // save sessionInfo into db. You will need this to verify the SMS code
  const sessionInfo = response.data.sessionInfo

  return sessionInfo
}

const verifyOTP = async (code, sessionInfo) => {
  const identityToolkit = google.identitytoolkit({
    auth: API_KEY,
    version: 'v3'
  })

  await identityToolkit.relyingparty.verifyPhoneNumber({
    code,
    sessionInfo
  })

  console.log('verification code accepted, update phoneNumberVerified flag in database')
}

module.exports = {
  sendOTP,
  verifyOTP
}
