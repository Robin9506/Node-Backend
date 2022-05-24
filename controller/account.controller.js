const account = require('../dao/account.dao')

exports.findAll = (req, res) => {
    account.findAllAccountsSQL().then(r => res.send(r))
}
