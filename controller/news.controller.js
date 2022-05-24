const news = require('../dao/news.dao')

exports.findAll = (req, res) => {
    news.getAllNews().then(newsData => res.send(newsData))
}

