const mongoose = require('mongoose')
const UserSchema = mongoose.Schema(
    {
        Username:{
            type:String,
            required:true
        },
       email: {
         type:String,
         required:true
        },
        password:{
            type:String,
            required:true 
        }
    },
    {
        timestamps:true
    }

);

//(MongoDB will automatically convert it to lowercase and pluralize it if needed, like users)
const UserModel = mongoose.model("Users",UserSchema);

module.exports = UserModel;