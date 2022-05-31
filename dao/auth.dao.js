const database = require('../database_connection/databaseConnection')

exports.login = async (account) => {
    return await database.one('SElECT * FROM Account WHERE username = $1 AND password = $2',
        [account.username, account.password], result => result)
        .then(function (result){
            return result;
        })
        .catch()
}
