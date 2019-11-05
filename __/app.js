/**
* File name: __/recaptcha/app.js
* Date: 2019-11-01 15:14:46
*/
// API services
;(function() {
  const service = {}

  /**
   * @returns {Promise}
   */
  service.get = (url, parameter) => new Promise((resolve, reject) => {
    $.ajax({
      url,
      data: parameter,
      type: 'GET',
      dataType: 'json',
      success: resolve,
      error: reject
    })
  })

  /**
   * @returns {Promise}
   */
  service.post = (url, data) => new Promise((resolve, reject) => {
    $.ajax({
      url,
      data,
      type: 'POST',
      dataType: 'json',
      success: resolve,
      error: reject
    })
  })

  service.sendOTP = (payload) => service.post('/sendOTP', payload)

  service.verifyOTP = (payload) => service.post('/verifyOTP', payload)

  window.Service = service
})()

// APP scripts
;(function() {
  const app = {}

  app.handlerRecaptchaToken = async recaptchaToken => {
    try {
      let response = await Service.sendOTP({
        phone: document.getElementById('phoneNumber').value,
        recaptchaToken
      })

      app.session = response.session

      alert('Input your OTP from SMS and click Verify OTP')
    } catch (error) {
      console.error(error)
    }
  }

  app.verifyOTP = async () => {
    try {
      let response = await Service.verifyOTP({
        OTP: document.getElementById('OTP').value,
        session: app.session
      })

      alert(response.message)
    } catch (error) {
      console.error(error)
    }
  }

  window.App = app
})()