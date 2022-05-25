module.exports = app => {
    const newsRoute = require('../news.route')(app)
    const accountRoute = require('../account.route')(app)

}


