import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
          EMPLOYEE APPLICATION
        </Typography>
       <Link to={'/home'}style={{ color:'white' }}><Button color="inherit">Home</Button></Link> 
       <Link to={'/empform'}style={{ color:'white' }}><Button color="inherit">Admin</Button></Link> 
       <Link to={'/'}style={{ color:'white' }}><Button color="inherit" onClick={()=>{
        sessionStorage.removeItem('token');
       }}>LogOut</Button></Link> 
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar