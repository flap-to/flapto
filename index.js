const dns = require('dns')

dns.resolveTxt('address.gabbi.ai', (err, records) => {
  console.log(err, records)
})
