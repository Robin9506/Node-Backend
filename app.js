require('dotenv').config();
const express = require('express')
const app = express()

const database = require('./DatabaseConnection/databaseConnection')

app.get('/', (req, res) => {
    res.send('Get')
})

app.listen(process.env.PORT, () => {
    console.log("Node server listening on port: " + process.env.PORT)
})
