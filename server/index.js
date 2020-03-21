const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const route=require('./routes/routes');
app.use(route);
// app.get('/',(req,res)=>{
//     res.send("hello world");
// })
app.listen(4000,()=>{
    console.log("server is running on port 4000");
    
})
