const mongoose=require('mongoose');
const conn=mongoose.connect('mongodb://127.0.0.1:27017/customer',(err)=>{
    if(err) throw err
    else
    console.log("connected to mongo database");
});
module.exports=conn;