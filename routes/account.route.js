module.exports = app => {
    const accountController = require('../controller/account.controller')

    app.get('/account', accountController.findAll)
}

