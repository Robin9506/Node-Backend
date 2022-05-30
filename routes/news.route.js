module.exports = app => {
    const newsController = require('../controller/news.controller')

    app.post('/news/add', newsController.postNews)

    app.get('/news', newsController.findAllNews)

    app.delete('/news/delete/:newsID', newsController.deleteNews)
}
