const express=require('express');
const path=require('path');
const adminData=require('./admin.js');
const router=express.Router();

router.get('/',(req,res,next)=>{
    const products=adminData.products;
    res.render('shop',{prods:products,pageTitle:'shop',path:'/',hasProducts:products.length>0});
   
   
});

module.exports=router;