const dns = require('dns')
const parser = require('./parser')

dns.resolveTxt('address.gabbi.ai', (err, records) => {
  let details = parser(records)
  console.log(err, details)
})
