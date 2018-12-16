const Mailgun = require('mailgun-js')

const NAME = 'Mailgun'

function sendMessage ({apiKey, domain, fromEmail, toEmail}, rec) {
  const mailgun = Mailgun({apiKey, domain})

  const emailData = {
    from: `Lamassu Server ${fromEmail}`,
    to: toEmail,
    subject: rec.email.subject,
    text: rec.email.body
  }

  return mailgun.messages().send(emailData).catch(err => {
    if (err.message == '\'to\' parameter is not a valid address. please check documentation') {
      badEmailError = new Error(err.message);
      badEmailError.name = 'BadEmailError'
      throw badEmailError;
    }
    throw new Error(`Error from Mailgun: ${err.message}`);
  })
}

module.exports = {
  NAME,
  sendMessage
}
