const {Schema, model} = require('mongoose');
const mongoose = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, trim: true},
    image: {type: String, trim: true},
    count: {type: Number, required: true},
    size: {
        width: {type: Number},
        height: {type: Number}
    },
    weight: {type: Number},
    date: {type: Date, default: Date.now},
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
       }]
})

module.exports = model('Product', schema)