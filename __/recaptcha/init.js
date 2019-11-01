var recaptchaWidgetId

grecaptcha.ready(function() {
  grecaptcha
  	.execute(reCAPTCHA_site_key, { action: 'firebase' })
  	.then(function(token) {
     	console.log({ token })
    })
})

// set-up an invisible recaptcha. 'sendCode` is button element id
const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sendCode', {
  size: 'invisible',
  callback: App.handlerRecaptchaToken,
  ['expired-callback']() {
    grecaptcha.reset(recaptchaWidgetId)
  }
})

// render the rapchaVerifier. 
recaptchaVerifier.render().then(function(widgetId) {
  recaptchaWidgetId = widgetId
})
