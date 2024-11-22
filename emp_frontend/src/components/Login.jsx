import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const [loginForm,setLoginForm]=useState({
    "email":'',
    "password":''
  })
  function capValue(){
    axios.post('http://localhost:4000/user/login',loginForm).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('token',res.data.token);
        navigate('/');
      }
      navigate('/home')
    }).catch((err)=>{
     
      console.log(err)
    
    })
  }
  return (
   
        <div style={{ margin:'15%' }}>
        <Typography variant='h3' style={{ color:"darkblue" }}>Employee App Login</Typography><br></br>
        <TextField id="outlined-basic" label="Email" name="email" onChange={(e)=>{
          setLoginForm({...loginForm,email:e.target.value})
        }} variant="outlined"/>
        <br></br> <br></br>
        <TextField id="outlined-basic" label="Password" mame="password" onChange={(e)=>{
          setLoginForm({...loginForm,password:e.target.value})
        }}variant="outlined"/>
        <br></br> <br></br>
        <Button variant="contained" onClick={capValue}>LogIn</Button>
        <br/><br/>
        <Typography  style={{ color:"darkblue" }}>
            <Link to={'/signup'} style={{ color:'darkblue' }}>New User?Please click here.</Link></Typography>
    </div>
   
  )
}

export default Login