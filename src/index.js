const os = require('os')
const path = require('path')
const cors = require('cors')
const boom = require('express-boom')
const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.use(cors())

// boom response
app.use(boom())

// static files
app.use('/__', express.static(path.join(__dirname, '..', '__')))

// setup view-engine and views global, filter
app.set('view engine', 'html')
require('./view')(nunjucks.configure(path.join(__dirname, 'views'), {
  express: app,
  watch: true,
  autoescape: true,
  tags: {
    blockStart: '{%',
    blockEnd: '%}',
    variableStart: '{{',
    variableEnd: '}}',
    commentStart: '{#',
    commentEnd: '#}'
  }
}))

// support parsing of application/json type post data
app.use(express.json({
  limit: '5mb',
  type: 'application/json'
}))

// support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({
  limit: '5mb',
  extended: true
}))

// middleware
app.use((req, res, next) => {
  res.locals.route = {
    origin: req.protocol + '://' + req.headers.host,
    url: req.url,
    path: req.path
  }
  next()
})

// load routes
app.use('/', require('./router'))

// Handle 404
app.use((req, res) => {
  res.status(404)
  return res.render('errors/404', {
    error: {
      message: 'Page not found.'
    }
  })
})

const PORT = process.env.PORT || 3001
app.listen(
  PORT,
  '0.0.0.0',
  () => console.log('App listening at http://%s:%s', os.hostname(), PORT)
)

module.exports = app
