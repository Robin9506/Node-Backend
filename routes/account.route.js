module.exports = app => {
    const newsController = require('../controller/news.controller')

    app.get('/account', newsController().findAll)
}

