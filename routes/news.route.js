module.exports = app => {
    const newsController = require('../controller/news.controller')

    app.post('/news/add', newsController.post)

    app.get('/news', newsController.findAll)

    app.delete('/news/:newsID', newsController.findAll)
}
