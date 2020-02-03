const express = require('express')
const mongoose = require('mongoose')

const { CONNECTION_URL } = require('./.env')

const routes = require('./routes')
const { countReqs } = require('./middlewares')

const app = express()

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser     : true,
    useUnifiedTopology  : true,
    useFindAndModify    : false,
    useCreateIndex      : true
})

app.use(express.json())
app.use(countReqs)
app.use(routes)


app.listen(3000)