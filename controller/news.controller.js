const News = require('../dao/news.dao')
const HTTP_ENUMS = require('../utilities/http_enums')

exports.post = (request, response) => {
    if (request.body == null) {
        return response.status(HTTP_ENUMS.NOT_FOUND).send({
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
        .then(function (error) {
            if (!error) {
                return response.status(HTTP_ENUMS.SUCCESS).send(
                    "Status Code (" + HTTP_ENUMS.SUCCESS + "): " + "News item successfully created")
            }
            return response.status(HTTP_ENUMS.UNPROCESSABLE_ENTITY).send(
                "Status Code (" + HTTP_ENUMS.UNPROCESSABLE_ENTITY + "): " + "News item couldn't be processed")
        }).catch();
}

exports.findAll = (request, response) => {
    News.getAllNews()
        .then(newsData => response.send(newsData))
        .catch((function(){
            return response.status(HTTP_ENUMS.SERVICE_UNAVAILABLE).send(
                "Status Code (" + HTTP_ENUMS.SERVICE_UNAVAILABLE + "): "+ "Service Unavailable")
        }));
}


