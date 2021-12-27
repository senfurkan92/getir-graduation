const service = require('../services/record')
const { validationResult } = require('express-validator')
const ApiError = require('../error')
const { getProperRecords } = require('../script/mapper')

// fetching records by using record service and passing them to route 
exports.index = async (req, resp, next) => {
  const errors = validationResult(req)

  // editing data whether error did not occur
  if (errors.isEmpty()) {
    let startDate = new Date(req.body.startDate)
    // getting tomorrow date to get current day data too
    let tomorrowEndDate = new Date(req.body.endDate);
    tomorrowEndDate.setDate(tomorrowEndDate.getDate() + 1);
    const filter = {
      "$expr": { 
          "$and": [
            { "$gte": ["$createdAt", startDate] },
            { "$lte": ["$createdAt", tomorrowEndDate] },
            { "$gte": [{"$sum": "$counts"}, req.body.minCount] },
            { "$lte": [{"$sum": "$counts"}, req.body.maxCount] },
          ]
        }
    }
    const result = await service.getMany(filter)
    if(result.content.code === '0') {
      // editing data whether query is right
      result.content.records = getProperRecords(result.content.records)
    }
    resp.status(result.status).json(result.content)
  } else {
    // passing to error handling whether validation error occurred
    const result = new ApiError('validation error', 415, errors.array().map(x => x.msg))
    next(result)
  }
}