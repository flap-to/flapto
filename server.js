const dns = require('dns')
const http = require('http')
const template = require('lodash.template')
const compile = require('turbo-json-parse')
const config = require('rc')('flapto', {
  port: 80,
  redirect: 'https://www.google.com/maps/search/?api=1&query=${lat},${lon}'
})

const flaptoSchema = require('./schema')
const parse = compile(flaptoSchema)


http.createServer((req, resp) => {
  let headers = req.headers
  let host = req.headers.host
  if (!host) return resp.end('no hostname configured')

  dns.resolveTxt(host, (err, records) => {
    if (err) return resp.end('error')
    if (!records || !records.length) return resp.end('error, no records')
    let _record = records[0]
    if (!_record || !_record.length ) return resp.end('error, not structure')
    let record = _record[0]

    if (!record) return resp.end('no latlon')
    let details = parse(record)
    let [lat,lon] = details.l
    if (!lat || !lon) return resp.end('invalid')
    resp.writeHead(302, {
      'Location': `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
    })
    resp.end()
  })
}).listen(80)
