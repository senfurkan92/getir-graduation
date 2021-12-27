const path = require('path')
const customLog = require('../../helpers/custom-log')
const logPath = path.join(__dirname, '../../', 'log', 'error.log')

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    customLog(logPath, `${req.originalUrl}: ${err.message} - ${(new Date()).toISOString()}\n`)
    res.status(err.status).json({ 
      code: '1',
      message: err.message,
      errors: err.errors 
    });
};
  
module.exports = errorHandler;