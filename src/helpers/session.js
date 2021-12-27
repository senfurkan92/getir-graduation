// session config

require('dotenv').config()
const session = require('express-session')

module.exports = (session({
  secret: process.env.SESSION_KEY,
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  }
}))
