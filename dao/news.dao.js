const database = require('../database_connection/databaseConnection')

const News = function(news) {
    this.title = news.title;
    this.text = news.text;
    this.date = news.date;
    this.status = news.status;
    this.featured = news.featured;
};

News.postNews = newsObject => {
    database.one('INSERT INTO News(title, text, date, status, featured) VALUES ($1, $2, $3, $4, $5)',
        [newsObject.title, newsObject.text, newsObject.date, newsObject.status, newsObject.featured])
        .then(r => {console.log(r)
        })
        .catch(function(error) {
            console.log(error);
        });
}

News.getAllNews = async () => {
    return await database.any('SELECT * FROM News')
        .then(function(data){
            return data;
        })
        .catch(function(error) {
            console.log(error);
        });
}

module.exports = News
