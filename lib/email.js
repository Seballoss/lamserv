const configManager = require('./config-manager')
const ph = require('./plugin-helper')

function sendMessage (settings, rec) {
  return Promise.resolve()
    .then(() => {
      const pluginCode = configManager.unscoped(settings.config).email
      const plugin = ph.load(ph.EMAIL, pluginCode)
      const account = settings.accounts[pluginCode]

      return plugin.sendMessage(account, rec)
    })
}

function sendVerificationMessage (settings, rec, toEmail) {
  return Promise.resolve().
    then(() => {
      const pluginCode = configManager.unscoped(settings.config).email
      const plugin = ph.load(ph.EMAIL, pluginCode)
      const account = settings.accounts[pluginCode]

      return plugin.sendMessage({...account, toEmail}, rec)
    })
}

module.exports = {sendMessage, sendVerificationMessage}
