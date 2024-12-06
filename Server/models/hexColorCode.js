const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    color: String,
    colorOdd: String
})

const testModel = mongoose.model("test", testSchema)
module.exports = testModel