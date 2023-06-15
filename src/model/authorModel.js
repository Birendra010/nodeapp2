const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:30
    },
    
    specialization:{
        type:String,
        trim:true,
       
    },
    book:{
        type:String,
        stocks:Number,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true
    }

})
module.exports = mongoose.model("Author",authorSchema);
