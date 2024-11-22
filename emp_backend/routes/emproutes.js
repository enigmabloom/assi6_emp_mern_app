const express=require('express');
 const router=express.Router();
const EmpModel=require('../model/empdata');
const jwt=require('jsonwebtoken');
 router.use(express.json());
function veryfytoken(req,res,next){
let token=req.headers.token;
try {
  if(!token) throw 'unauthorized access';
  let payload=jwt.verify(token,'empapp')
  if(!payload)throw 'unauthorized access';
  next()
} catch (error) {
  console.log(error)
}

}

 router.get('/',async(req,res)=>{
    try{
   const data= await EmpModel.find();
    res.status(200).send (data);
} catch(error){
     res.status(400).send('no data');

 }

})
 router.post('/add',veryfytoken, async (req, res) => {
  try {
    const post = new EmpModel(req.body);  // Create a new instance with the data
    const data = await post.save();
    //const post=req.body;
    //const data=await EmpModel  (post.save())
res.status(200).send({message:"Employee details added"})
console.log(data)
}
catch(error){
    console.log(error)
}
});
     
router.put('/edit/:id',veryfytoken, async(req,res)=>{
    try{
        var item=await EmpModel.findByIdAndUpdate(req.params.id,item);
        res.status(200).send({message:"updated successfully"});
    }catch(error){
        res.status(400).send('update not working');
    }
})


router.delete('/:id', veryfytoken,async (req, res) => {
    try {
      const deletedEmp = await EmpModel.findByIdAndDelete(req.params.id);
      if (!deletedEmp) {
        return res.status(404).send({ message: 'Employee not found' });
      }
      res.status(200).send({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'An error occurred', error });
    }
  });
 
  
  
    
 module.exports=router;