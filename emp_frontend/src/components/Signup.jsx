import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const[users,setUsers]=useState();
 const inputhandler=(e)=>{
  setUsers({...users,[e.target.name]:e.target.value})
 }
 const addhandler=()=>{
  console.log(users);
  axios.post('http://localhost:4000/user/e',users).then((res)=>{
console.log(res)
  })

 .catch((error)=>{
console.log(error)
 })
}
  return (
    <Box sx={{ flexGrow: 1 }}style={{ marginTop:'10%',marginLeft:'20%',width:'50%'}}>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
      <TextField fullWidth variant='outlined' label='Name' id='base-outlined' name="name" onChange={inputhandler}></TextField>
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth variant='outlined' label='Email' id='base-outlined' name='email' onChange={inputhandler}></TextField>
           </Grid2>
           <Grid2 size={12}>
        <TextField fullWidth 
          id="outlined-multiline-flexible" 
          label="Address" name="address"
          multiline
          rows={4}
          />
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth variant='outlined' label='Password' name="password" id='base-outlined'onChange={inputhandler}></TextField>
        </Grid2>
     
        <Grid2 size={6}>
        <TextField fullWidth variant='outlined' label='Phone Number' name="phone" id='base-outlined' onChange={inputhandler}></TextField>

        </Grid2>
        <Grid2 size={12}>
        <Button variant='contained' onClick={addhandler}>SignUp</Button>
        </Grid2>
        <Grid2 size={12}>
        <Typography
          style={{ color:"darkblue" }}>
        <Link to={'/'}style={{ color:'darkblue' }}>Registered User?Please click here.</Link></Typography>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Signup