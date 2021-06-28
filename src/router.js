const firebase = require('./firebase')
const { Router } = require('express')
const router = Router()

/* firebase page */
router.get('*', (req, res) => {
  return res.render('pages/firebase', {
    page_title: 'Firebase example'
  })
})

/* sendOTP to phone number */
router.post('/sendOTP', async (req, res) => {
  try {
    let session = await firebase.sendOTP(req.body.phone, req.body.recaptchaToken)

    return res.send({
      session,
      message: 'Send OTP successfully.'
    })
  } catch (error) {
    res.status(400)
    return res.render('errors/400', { error })
  }
})

/* verify phone */
router.post('/verifyOTP', async (req, res) => {
  try {
    await firebase.verifyOTP(req.body.OTP, req.body.session)

    return res.send({
      message: 'Phone verified.'
    })
  } catch (error) {
    res.status(400)
    return res.render('errors/400', { error })
  }
})

module.exports = router
