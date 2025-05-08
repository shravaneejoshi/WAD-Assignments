const mongoose = require('mongoose')

const messengerSchema= mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        msg:{
            type:String,
            required:true
        }
    }
)

const msgrModel = mongoose.model('messenger',messengerSchema)

module.exports = msgrModel