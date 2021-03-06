const jwt = require('jsonwebtoken')

module.exports = (data, secret, expiresIn = '1h') => {
  return new Promise(resolve => {
    resolve(jwt.sign({ data }, secret, { expiresIn }))
  })
}
