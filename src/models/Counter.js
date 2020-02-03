const mongoose = require('mongoose')

const CounterSchema = mongoose.Schema({
    counter : Number
})

module.exports = mongoose.model('Counter',CounterSchema)