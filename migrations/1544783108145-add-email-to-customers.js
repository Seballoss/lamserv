var db = require('./db')

exports.up = function (next) {
  const sql = [
    'alter table customers add column email varchar',
    'alter table customers add column email_at timestamp with time zone',
  ]

  db.multi(sql, next)
}

exports.down = function (next) {
  const sql = [
    'alter table customers drop column email',
    'alter table customers drop column email_at timestamp with time zone'
  ]

  db.multi(sql, next)
}
