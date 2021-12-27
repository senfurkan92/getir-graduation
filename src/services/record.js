const BaseService = require('./base');
const recordModel = require('../models/record')

// injecting record model to base service
// forming record service
class HomeService extends BaseService{
  constructor() {
      super(recordModel)
  }
}

module.exports = new HomeService()
