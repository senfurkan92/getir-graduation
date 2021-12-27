const { Response } = require('../models/result')

class BaseService {
  constructor(model) {
    this.model = model
  }

  async getMany (filter, orderBy = 'createdAt') {
    let result = null
    try {
      const data = await this.model.find(filter).sort(orderBy)
      result = new Response('0', 'Success', data, 200)
    } catch (error) {
      result = new Response('1', `Error: ${error.message}`, null, 500)
    }
    return result
  }
}

module.exports = BaseService