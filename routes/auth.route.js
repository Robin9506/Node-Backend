module.exports = app => {
    const authController = require('../controller/auth.controller')

    app.post('/auth', authController.login)
}
