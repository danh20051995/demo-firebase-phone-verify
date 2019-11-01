
module.exports = env => {
  // global
  env.addGlobal('RE_CAPTCHA_KEY', process.env.RE_CAPTCHA_KEY)
  env.addGlobal('FIREBASE_CONFIG', {
    appId: process.env.FIREBASE_APP_ID,
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  })

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
