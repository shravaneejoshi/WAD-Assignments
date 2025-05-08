const mongoose = require('mongoose')

const StudSchema =mongoose.Schema({
StudentName:{
    type:String,
    required:true,
},
email: {
    type:String,
    required:true
   },
   cetMarks:{
    type:Number,
    required:true
   }

},{
    timestamps:true
});

//(MongoDB will automatically convert it to lowercase and pluralize it if needed, like users)

const StudModel = mongoose.model("students",StudSchema);
module.exports=StudModel;