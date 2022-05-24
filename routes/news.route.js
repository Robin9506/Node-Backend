module.exports = app => {
    const newsController = require('../controller/news.controller')

    app.get('/news', newsController.findAll)

    app.delete('/news/:newsID', newsController.findAll)
}
