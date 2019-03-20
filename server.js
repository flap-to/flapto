const dns = require('dns')
const http = require('http')
const template = require('lodash.template')
const parser = require('./parser')
const config = require('rc')('flapto', {
  port: 80,
  redirect: 'https://www.google.com/maps/search/?api=1&query=${lat},${lon}'
})
const compiled = template(config.redirect)

http.createServer((req, resp) => {
  let headers = req.headers
  let host = req.headers.host
  if (!host) return resp.end('no hostname configured')

  dns.resolveTxt(host, (err, records) => {
    if (err) return resp.end('error')
    if (!records || !records.length) return resp.end('error, no records')
    let details = parser(records)
    if (!details.l) return resp.end('no latlon')
    if (!details.lat || !details.lon) return resp.end('invalid')
    resp.writeHead(302, { 'Location': compiled(details) })
    resp.end()
  })
}).listen(80)
