const BaseService = require('./base');
const recordModel = require('../models/record')

class HomeService extends BaseService{
  constructor() {
      super(recordModel)
  }
}

module.exports = new HomeService()
