module.exports = {
  apps: [
    {
      name: 'firebase-phone-auth',
      script: './index.js',
      // watch: false,
      // instances: 'max',
      // exec_mode: 'cluster',
      // log_file: './pm2logs/maua_outerr.log',
      // error_file: './pm2logs/maua_error.log',
      // out_file: './pm2logs/maua_output.log',
      env: {
        PORT: 3001,
        NODE_ENV: 'production'
      }
    }
  ]
}
