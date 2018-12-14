const _ = require('lodash/fp')

const NAME = 'MockEmail'

function sendMessage ({toEmail, ...account}, rec) {
  console.log('Sending Email: %j', rec)
  return new Promise((resolve, reject) => {
    if (_.endsWith('666', toEmail)) {
      reject(new Error(`${exports.NAME} mocked error!`))
    } else {
      setTimeout(resolve, 10)
    }
  })
}

module.exports = {
  NAME,
  sendMessage
}
