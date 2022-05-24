const news = require('../dao/news.dao')

exports.findAll = (req, res) => {
    news.findAllNewsSQL((err, data) => {

    }).then(r => res.send(r))
}

