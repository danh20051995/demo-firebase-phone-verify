
module.exports = env => {
  // global
  env.addGlobal('RE_CAPTCHA_KEY', process.env.RE_CAPTCHA_KEY)
  env.addGlobal('FIREBASE_CONFIG', require('../credentials/firebase-config.json'))

  env.addGlobal('page_title', 'Express example')
  env.addGlobal('timestamp', new Date().getTime())

  // filters
  env.addFilter('stringify', (data, space = 2) => JSON.stringify(data, null, space))
  env.addFilter('dateFormat', (date, format) => {
    if ([ 'yyyy', 'YYYY' ].includes(format)) {
      return new Date(date).getFullYear()
    }

    return new Date(date).toLocaleDateString()
  })
}
