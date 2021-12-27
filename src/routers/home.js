const router = require('express').Router()

// redirecting home index route to swagger doc url
router.get('/', (req, res, next) => {
  if (req.originalUrl == '/') {
    res.redirect('/doc')
  } else {
    next()
  }
})

module.exports = router