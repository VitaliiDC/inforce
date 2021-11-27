const {Schema, model} = require('mongoose')

const schema = new Schema({
    productId: {type: String, required: true},
    description: {type: String},
    date: {type: Date, default: Date.now}
})

module.exports = model('Comment', schema)