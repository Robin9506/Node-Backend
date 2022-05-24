const database = require('../database_connection/databaseConnection')

const news = function(news) {
    this.id = news.id;
    this.title = news.title;
    this.text = news.text;
    this.date = news.date;
    this.status = news.status;
    this.featured = news.featured;
};

module.exports.findAllNewsSQL = async result => {
    return await database.any('SELECT * FROM news')
        .then(function(data){
            return data;
        })
        .catch(function(error) {
            console.log(error);
        });
}

