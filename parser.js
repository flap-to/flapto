module.exports = (record) => {
  let details = {}
  record.forEach(entry => {
    if (!entry.length) return
    if (typeof entry[0] !== 'string') return
    let parts = entry[0].split('=')
    if (parts.length !== 2) return // ignore bad records
    details[parts[0]] = parts[1]
  })
  if (!details.l) return // no lat/lon
  details.l = details.l.split(',')
  return details
}
