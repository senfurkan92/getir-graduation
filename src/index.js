require('dotenv').config()
require('./db')
const express = require('express')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const homeRouter = require('./routers/home')
const recordRouter = require('./routers/record')
const errorHandler = require('./middlewares/err-handler')
const path = require('path')
const customLog= require('./helpers/custom-log')
const ApiError = require('./error')
const app = express()

app.use(express.json())

// swagger
const specs = swaggerJsDoc(require('./helpers/swagger'));
app.use("/doc", swaggerUI.serve, swaggerUI.setup(specs));

// cors
app.use(cors())

// session
app.use(require('./helpers/session'))

// log
require('./helpers/log')(app)

// routes
app.use('/', homeRouter)
app.use('/records', recordRouter)

// not existing endpoint
app.use((req, res, next) => {
    next(new ApiError('not existing endpoint', 404));
})

// error handler
app.use(errorHandler)

// listen
const logPath = path.join(__dirname, 'log', 'service.log')
app
  .listen(process.env.PORT || process.env.SERVER_PORT || 5000, () => {
    console.log(`server is running ${process.env.PORT || process.env.SERVER_PORT || 5000}`) 
    customLog(logPath, `server success - ${(new Date()).toISOString()}\n`)
  })
  .on('error', (e) => {
    console.log(`server cannot run: ${e.message}`)
    customLog(logPath, `server fail: ${e.message} - ${(new Date()).toISOString()}\n`)
  })