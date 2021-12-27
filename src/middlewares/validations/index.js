const { body } = require('express-validator')

exports.validate = () => {
  return [
    body('startDate')
      .trim()
      .notEmpty().withMessage("startDate required")
      .custom(value => {
          if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(value)) {
            throw new Error('Not proper startDate format ("yyyy-mm-dd")');
          }
          return true
      }),
    body('endDate')
      .trim()
      .notEmpty().withMessage("endDate required")
      .custom((value, { req }) => {
          if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(value)) {
            throw new Error('Not proper endDate format ("yyyy-mm-dd")');
          } else if (new Date(value).getTime() < new Date(req.body.startDate).getTime()) {
            throw new Error('endDate cannot be earlier than startDate');
          }
          return true
      }),
    body('minCount')
      .notEmpty().withMessage("minCount required")
      .isNumeric().withMessage('minCount must be number'),
    body('maxCount')
      .notEmpty().withMessage("maxCount required")
      .isNumeric().withMessage('maxCount must be number')
      .custom((value, { req }) => {
        if (value < req.body.minCount) {
          throw new Error('minCount cannot be bigger than maxCount');
        }
        return true
    }),
  ]
}