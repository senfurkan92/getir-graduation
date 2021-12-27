require('dotenv').config()
require('../db')
const express = require('express')
const cors = require('cors')
const recordRouter = require('../routers/record')
const errorHandler = require('../middlewares/err-handler')
const ApiError = require('../error')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/records', recordRouter)
app.use((req, res, next) => {
    next(new ApiError('not existing endpoint', 404));
})
app.use(errorHandler);

module.exports = app