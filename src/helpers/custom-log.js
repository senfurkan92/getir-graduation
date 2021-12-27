// logging errros, db connection and service initial state
const fs = require('fs')

module.exports = (logPath, msg) => {
  fs.appendFileSync(logPath, msg)
}