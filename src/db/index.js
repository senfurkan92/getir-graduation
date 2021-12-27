require('dotenv').config()
const path = require('path')
const mongoose = require('mongoose')
const customLog = require('../helpers/custom-log')
const logPath = path.join(__dirname, '../', 'log', 'db-connect.log')

mongoose.connect(process.env.CSTR, (err) => {
  if (err) {
    console.log(`db connection errror: ${err.message}`)
    customLog(logPath, `db connection errror: ${err.message} - ${(new Date()).toISOString()}\n`)
  } else {
    console.log('db connected')
    customLog(logPath, `db connected - ${(new Date()).toISOString()}\n`)
  }
})