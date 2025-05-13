const mongoose = require('mongoose')

const CrudSchema = new mongoose.Schema({
    firstName : {type : String,required : true},
    lastName : {type : String,required : true},
    isDeleted : {type : Boolean,default : false}
},{
    versionKey : false,
    timestamps : true
})
const CrudModel = new mongoose.model('crud',CrudSchema)
module.exports = CrudModel