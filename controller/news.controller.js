const News = require('../dao/news.dao')

exports.post = (request, response) => {
    if (!request.body) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const news = new News({
        title: request.body.title,
        text: request.body.text,
        date: request.body.date,
        status: request.body.status,
        featured: request.body.featured
    });

    News.postNews(news)
}

exports.findAll = (request, response) => {
    News.getAllNews().then(newsData => response.send(newsData))
}

