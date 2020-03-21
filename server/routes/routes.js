const express=require('express');
const router=express.Router();
const customerdetails=require('../model/customer');
const conn=require('../database/connect');

router.get('/',async(req,res)=>{
    const m=await customerdetails.find();
    // res.send("iam here in routers")
    res.json(m);
});
router.post('/data',(req,res)=>{
    const data=req.body;
    const customer=new customerdetails(data);
    customer.save((err,data)=>{
        if(err) throw err;
        res.json(data);
    });
})
router.delete('/:name',async(req,res,err)=>{
    if(err) console.log("error");
    const rem=await post.remove({"name":req.params.name});
    res.json(rem);
    console.log("object removed");
});

module.exports=router;