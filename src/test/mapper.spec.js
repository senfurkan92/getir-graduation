const { getProperRecords } = require('../script/mapper')
const list = [
    {
      "_id": "5ee215d5e07f053f990ceee9",
      "key": "MkpmlwkL",
      "value": "zUxwXLEQJCxA",
      "createdAt": "2016-01-29T02:12:54.428Z",
      "counts": [
        29,
        28
      ]
    },
    {
      "_id": "5ee215d5e07f053f990cf29d",
      "key": "ydvyBrgE",
      "value": "CrTnTzvGFbxU",
      "createdAt": "2016-01-31T15:54:52.654Z",
      "counts": [
        40,
        20
      ]
    }
 ]
const expectedList = [
    {
        "key": "MkpmlwkL",
        "createdAt": "2016-01-29T02:12:54.428Z",
        "totalCount": 57
    },
    {
        "key": "ydvyBrgE",
        "createdAt": "2016-01-31T15:54:52.654Z",
        "totalCount": 60
    }
 ]

describe('mapper test', () => {
  test('return necessary record properties', () => {
    expect(getProperRecords(list)).toEqual(expectedList)
  })
})

