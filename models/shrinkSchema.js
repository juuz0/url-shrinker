const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shrinkSchema = new Schema({
    mainUrl: String,
    generatedUrl: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
      },
})

const shrinkobj = mongoose.model('shrinkobj', shrinkSchema)
module.exports  = shrinkobj