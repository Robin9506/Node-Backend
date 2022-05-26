const database = require('../database_connection/databaseConnection')
const {response} = require("express");

const News = function(news) {
    this.title = news.title;
    this.text = news.text;
    this.date = news.date;
    this.status = news.status;
    this.featured = news.featured;
};

News.postNews = (newsObject) => {
    return database.none('INSERT INTO News(title, text, date, status, featured) VALUES ($1, $2, $3, $4, $5)',
        [newsObject.title, newsObject.text, newsObject.date, newsObject.status, newsObject.featured])
        .then(function(){

        }, function(error){
            return error
        })
        .catch(function(error) {
            return error
        });
}

News.getAllNews = async result => {
    return await database.any('SELECT * FROM News')
        .then(function(data){
            return data;
        }, )
        .catch(function() {
            result();
        });
}

module.exports = News
