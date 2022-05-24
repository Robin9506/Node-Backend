require('dotenv').config();
const express = require('express')
const app = express()

const newsRoute = require('./routes/news.route')(app)


app.get('/', (req, res) => {
    res.send('Get')
})

app.get('/test', (req, res) => {
    res.send('TESTTT')
})

app.listen(process.env.PORT, () => {
    console.log("Node server listening on port: " + process.env.PORT)
})
