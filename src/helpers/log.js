const fs = require('fs')
const path = require('path')
const morgan = require('morgan')

const logPath = path.join(__dirname, '../', 'log', 'access.log')
const stream = fs.createWriteStream(logPath, { flags: 'a' })

module.exports = (app) => {
  app.use(morgan('combined', {stream}))
}