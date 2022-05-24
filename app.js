require('dotenv').config();
const express = require('express')
const app = express()
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

db.one('SELECT $1 AS value', 123)
    .then((data) => {
        console.log('DATA:', data.value)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })

app.get('/', (req, res) => {
    res.send('Get')
})

app.listen(process.env.PORT, () => {
    console.log("Node server listening on port: " + process.env.PORT)
})
