module.exports = {
  type: 'object',
  properties: {
    l: {type: 'array', items: {type: 'number'}}, // Array of latitude, longitude in that order
    n: {type: 'string'}, // notes, maybe street number
    wof: {type: 'string'} // an id from whos on first, https://spelunker.whosonfirst.org/
  }
}
