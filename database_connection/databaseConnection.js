require('dotenv').config();
const pgp = require('pg-promise')()

const connection = {
    connectionString: 'postgres://' +
        process.env.DATABASE_USERNAME + ':' +
        process.env.DATABASE_PASSWORD + '@' +
        process.env.DATABASE_IP_ADDRESS + '/'+
        process.env.DATABASE + '',
    max: 30
}
const db = pgp(connection)

module.exports = db;

