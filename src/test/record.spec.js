const request = require('supertest')
const app = require('../helpers/app')

beforeEach(()=> {
  jest.setTimeout(1000 * 10)
})

describe('route test', () => {
  // route test
  test('status must be 200', async () => {
    await request(app).post('/records')
      .send({
        "startDate": "2016-01-01",
        "endDate": "2016-12-01",
        "minCount": 0,
        "maxCount": 3000
      })
      .expect(200)
  })

  // validation test
  test('status must be 415', async () => {
    await request(app).post('/records')
      .send({
        "startDate": "2016-01-01",
        "endDate": "2016-12-01",
        "minCount": 0
      })
      .expect(415)

    await request(app).post('/records')
      .send({
        "startDate": "2016-0101",
        "endDate": "2016-12-01",
        "minCount": 0
      })
      .expect(415)

    await request(app).post('/records')
      .send({
        "startDate": "2016-01-01",
        "endDate": "2016-12-01",
        "minCount": 3000,
        "maxCount": 0
      })
      .expect(415)
  })  
})
