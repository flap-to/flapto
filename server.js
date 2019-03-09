// get hostname
// get text record for hostname
// parse lat/lon
// redirect to google maps
const dns = require('dns')
const http = require('http')

http.createServer((req, resp) => {
  let headers = req.headers
  let host = req.headers.host
  if (!host) return resp.end('no hostname configured')

  dns.resolveTxt(host, (err, records) => {
    if (err) return resp.end('error')
    if (!records || !records.length) return resp.end('error, no records')
    let _latlon = records[0]
    if (!_latlon && !latlon.length ) return resp.end('error, not structure')
    let latlon = _latlon[0]

    if (!latlon) return resp.end('no latlon')
    let [lat,lon] = latlon.split(',')
    if (!lat || !lon) return resp.end('invalid')
    resp.writeHead(302, {
      'Location': `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
    })
    resp.end()
  })


}).listen(80)
