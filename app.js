require('dotenv').config();
const express = require('express')
const app = express()

const newsRoute = require('./routes/news.route')(app)
const accountRoute = require('./routes/account.route')(app)


app.get('/', (req, res) => {
    res.send('Backend')
})

app.listen(process.env.PORT, () => {
    console.log("Node server listening on port: " + process.env.PORT)
})
