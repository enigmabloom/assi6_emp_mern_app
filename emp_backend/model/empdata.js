 const mongoose=require('mongoose');
const EmpSchema=mongoose.Schema({
 empname:String,
 empmail:String,
 empaddress:String,
 empphone:String

 })
const EmpData=mongoose.model('empdata',EmpSchema);
 module.exports=EmpData;
