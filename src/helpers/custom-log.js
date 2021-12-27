const fs = require('fs')

module.exports = (logPath, msg) => {
  fs.appendFileSync(logPath, msg)
}