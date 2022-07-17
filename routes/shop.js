const express=require('express');
const path=require('path');
const adminData=require('./admin.js');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log(adminData.products);
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
   
});

module.exports=router;