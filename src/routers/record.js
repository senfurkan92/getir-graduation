const router = require('express').Router()
const controller = require('../controllers/record')
const { validate } = require('../middlewares/validations')
const ApiError = require('../error')

/**
 * @swagger
 * components:
 *   schemas:
 *     Record:
 *       type: object
 *       required:
 *         - key
 *         - totalCount
 *         - createdAt
 *       properties:
 *         key:
 *           type: string
 *         totalCount:
 *           type: number
 *         createdAt: 
 *           type: date   
 *       example:
 *         key: TAKwGc6Jr4i8Z487
 *         createdAt: 2017-01-28T01:22:14.398+00:00
 *         totalCount: 1076
 */

 /**
  * @swagger
  * tags:
  *   name: Records
  */

router.all('/', (req,res, next) => {
  if (req.method != 'POST') {
    const result = new ApiError('method not allowed', 405)
    next(result)
    res.redirect('/doc')
  } else {
    next()
  }
})

/**
 * @swagger
 * /records:
 *   post:
 *     summary: Returns the filtered list of the records
 *     tags: [Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: 
 *               - startDate
 *               - endDate
 *               - minCount
 *               - maxCount
 *             properties: 
 *               startDate:
 *                 type: ""
 *               endDate:
 *                 type: ""
 *               minCount:
 *                 type: number
 *               maxCount:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Returns the filtered list of the records
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               require:
 *                 - code
 *                 - message
 *                 - data
 *               properties: 
 *                 code:
 *                   type: string
 *                 message: 
 *                   type: string
 *                 records:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Record'
 *       415:
 *         description: Unsupported media type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required: 
 *                 - code
 *                 - message
 *                 - errors
 *               properties: 
 *                 code:
 *                   type: ""
 *                 message:
 *                   type: ""
 *                 errors:
 *                   type: array
 *                   items: 
 *                     type: string
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required: 
 *                 - code
 *                 - message
 *                 - errors
 *               properties: 
 *                 code:
 *                   type: ""
 *                 message:
 *                   type: ""
 *                 errors:
 *                   type: array
 *                   items: 
 *                     type: string
 */

router.post('/', validate(), controller.index)

module.exports = router
