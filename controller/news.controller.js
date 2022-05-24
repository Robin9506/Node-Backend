const news = require('../dao/news.dao')

exports.findAll = (req, res) => {
    news.findAllNewsSQL().then(r => res.send(r))
}

