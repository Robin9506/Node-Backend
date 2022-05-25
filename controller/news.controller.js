const News = require('../dao/news.dao')
const HTTP_ENUMS = require('../utilities/http_enums')

exports.post = (request, response, result) => {
    if (!request.body) {
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

    News.postNews(news, result)
        .then(function(error) {
            console.log(result.toString());
            /*response.status(HTTP_ENUMS.SUCCESS).send(
                "Status Code (" + HTTP_ENUMS.SUCCESS + "): " + "News item successfully created")*/
        })
        .catch(function(){
            console.log("NOTTTT");
            /*response.status(HTTP_ENUMS.UNPROCESSABLE_ENTITY).send(
                "Status Code (" + HTTP_ENUMS.UNPROCESSABLE_ENTITY + "): " + "News item couldn't be processed")*/
        });
}

exports.findAll = (request, response) => {
    News.getAllNews()
        .then(newsData => response.send(newsData))
        .catch((function(){
            response.status(HTTP_ENUMS.SERVICE_UNAVAILABLE).send(
                "Status Code (" + HTTP_ENUMS.SERVICE_UNAVAILABLE + "): "+ "Service Unavailable")
        }));
}

