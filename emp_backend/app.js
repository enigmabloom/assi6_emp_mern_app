const express = require('express');
const dotenv = require('dotenv');
const app =new express();
const cors=require('cors');
require('dotenv').config();
require('./db/connection'); 
const userRoutes= require('./routes/userroutes')
const empRoutes= require('./routes/emproutes')
app.use(cors());
app.use('/user',userRoutes)
app.use('/emp',empRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
