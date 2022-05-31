const News = require('../dao/news.dao')
const HTTP_ENUMS = require('../utilities/http_enums')

exports.postNews = (request, response) => {
    /*if (!request.body.length) {
        return response.status(HTTP_ENUMS.NOT_FOUND).send(
            "Status Code (" + HTTP_ENUMS.NOT_FOUND + "): " + "Body is empty");
    }*/
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

exports.findAllNews = (request, response) => {
    News.getAllNews()
        .then(newsData => response.status(HTTP_ENUMS.SUCCESS).send(newsData))
        .catch((function(){
            return response.status(HTTP_ENUMS.SERVICE_UNAVAILABLE).send(
                "Status Code (" + HTTP_ENUMS.SERVICE_UNAVAILABLE + "): "+ "Service Unavailable")
        }));
}

exports.findOneNewsItem = (request, response) => {
    News.getOneNewsItem(request.params.newsID)
        .then(function (newsItem){
            if (!newsItem){
                return response.status(HTTP_ENUMS.NOT_FOUND).send(
                    "Status Code (" + HTTP_ENUMS.NOT_FOUND + "): "+ "News item(id: " + request.params.newsID + ")" +" couldn't be found")
            }
            return response.status(HTTP_ENUMS.SUCCESS).send(newsItem);
        });
}

exports.updateNewsItem = (request, response) => {


    const news = new News({
        title: request.body.title,
        text: request.body.text,
        date: request.body.date,
        status: request.body.status,
        featured: request.body.featured
    });

    News.updateNewsItem(news, request.params.newsID)
        .then(function (callback){
            if(callback.success){
                return response.status(HTTP_ENUMS.SUCCESS).send(
                    "Status Code (" + HTTP_ENUMS.SUCCESS + "): " + "News item successfully updated with id: " + callback.newsID)
            }

            if (callback.error){
                return response.status(HTTP_ENUMS.SERVICE_UNAVAILABLE).send(
                    "Status Code (" + HTTP_ENUMS.SERVICE_UNAVAILABLE + "): "+ "Service Unavailable")
            }



            return response.status(HTTP_ENUMS.NOT_FOUND).send(
                "Status Code (" + HTTP_ENUMS.NOT_FOUND + "): "+ "News item with id: " + callback.newsID + " not found")

        })
        .catch(function(){
            return response.status(HTTP_ENUMS.SERVICE_UNAVAILABLE).send(
                "Status Code (" + HTTP_ENUMS.SERVICE_UNAVAILABLE + "): "+ "Service Unavailable")
        })

}

exports.deleteNews = (request, response) => {
        News.deleteNews(request.params.newsID)
            .then(function (rowCount) {
                if(rowCount === 0) {
                    return response.status(HTTP_ENUMS.NOT_FOUND).send(
                        "Status Code (" + HTTP_ENUMS.NOT_FOUND + "): "+ "News item couldn't be found")
                }
                else if(rowCount === 1) {
                    return response.status(HTTP_ENUMS.SUCCESS).send(
                        "Status Code (" + HTTP_ENUMS.SUCCESS + "): " + "News item deleted")
                }

                return response.status(HTTP_ENUMS.SERVICE_UNAVAILABLE).send(
                    "Status Code (" + HTTP_ENUMS.SERVICE_UNAVAILABLE + "): "+ "Service Unavailable")
            })
            .catch((function(){
                return response.status(HTTP_ENUMS.SERVICE_UNAVAILABLE).send(
                    "Status Code (" + HTTP_ENUMS.SERVICE_UNAVAILABLE + "): "+ "Service Unavailable")
            }));
}


