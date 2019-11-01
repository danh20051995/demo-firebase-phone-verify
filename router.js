/**
* File name: index.js
* Created by Visual studio code
* User: Danh Le / danh.le@dinovative.com
* Date: 2019-01-18 17:38:59
*/
const firebase = require('./firebase')
const { Router } = require('express')
const router = Router()

/* firebase page */
router.get('/firebase', (req, res) => {
  return res.render('pages/firebase', {
    page_title: 'Firebase example'
  })
})

/* sendOTP to phone number */
router.post('/sendOTP', async (req, res) => {
  try {
    let session = await firebase.sendOTP(req.body.phone, req.body.recapchaToken)

    return res.send({
      session,
      message: 'Send OTP successfully.'
    })
  } catch (error) {
    res.status(500)
    return res.render('errors/500', {
      error
    })
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
    res.status(500)
    return res.render('errors/500', {
      error
    })
  }
})

module.exports = router
