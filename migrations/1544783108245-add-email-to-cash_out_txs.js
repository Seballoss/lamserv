var db = require('./db')

exports.up = function (next) {
  const sql = [
    'alter table cash_out_txs add column email varchar',
  ]

  db.multi(sql, next)
}

exports.down = function (next) {
  const sql = [
    'alter table cash_out_txs drop column email',
  ]

  db.multi(sql, next)
}
