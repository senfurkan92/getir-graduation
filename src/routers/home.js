const router = require('express').Router()

router.get('/', (req, res, next) => {
  if (req.originalUrl == '/') {
    res.redirect('/doc')
  } else {
    next()
  }
})

module.exports = router