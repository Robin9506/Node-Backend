const database = require('../database_connection/databaseConnection')

module.exports.findAllAccountsSQL = async () => {
    return await database.any('SELECT * FROM account')
        .then(function(data){
            return data;
        })
        .catch(function(error) {
            console.log(error);
        });
}

