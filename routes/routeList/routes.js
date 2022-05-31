module.exports = app => {
    const accountRoute = require('../account.route')(app)
    const authRoute = require('../auth.route')(app)
    const newsRoute = require('../news.route')(app)

}


