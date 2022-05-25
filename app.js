require('dotenv').config();
const express = require('express')
const app = express()

app.use(express.json());

const routes = require('./routes/routeList/routes')(app)

app.get('/', (req, res) => {
    res.send('Backend')
})

app.listen(process.env.PORT, () => {
    console.log("Node server listening on port: " + process.env.PORT)
})
