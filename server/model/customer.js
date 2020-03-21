const mongoose=require('mongoose')
const user=mongoose.Schema({
    firstName:String,
    lastName:String,
    address:String,
    city:String,
    state:String
})
module.exports=mongoose.model("customerdetails",user);