const mongoose=require('mongoose');
const UserSchema =mongoose.Schema({
     name:String,
      email:String,
       password:String,
phone:String

})
 const UserData=mongoose.model('userdata',UserSchema);
module.exports=UserData;
