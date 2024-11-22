 const express=require('express');
const router=express.Router();
const UserModel=require('../model/userdata');
const UserData = require('../model/userdata');
const jwt=require('jsonwebtoken');
router.use(express.json());

 router.post('/login',async(req,res)=>{
    try {
        const user= await UserModel.findOne({email:req.body.email});
        if(!user)
       {
             res.send({message:'user not found'});
         }
       else{
            if(user.password==req.body.password)
           {
            const payload={email:user.email,password:user.password}
            const token=jwt.sign(payload,'empapp')
               res.status(200).send({message:'Login Sucessful',token:token})
           }
           else{
                res.status(400).send('Invalid credentials')
            }
      }    } 
     catch (error) {
      console.log(error);
   }
   
 })
router.post('/e',async(req,res)=>{
   try{
        const data=req.body;
       await UserData(data).save()
        res.status(200).send({ message:"User successfully added to database" })
    } catch(error){
       console.log(error)
    
     }
})
 module.exports=router