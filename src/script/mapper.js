exports.getProperRecords = (records) => {
    return records.map((x) => {
        return {
            key: x.key,
            createdAt: x.createdAt,
            totalCount: x.counts.reduce((p,c) => {
                p += c
                return p 
              }, 0)
        }
    })
}