import React, { useState } from 'react'
import { Box, Button, Grid2, TextField, Typography } from '@mui/material'

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../axiosinterceptors';


const Empform = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const[form,setForm]=useState({
    empname:'',
    empmail:'',
    empphone:'',
    empaddress:''
  });
  useEffect(()=>{
if(location.state!=null){
setForm({...form,empname:location.state.val.empname,
  empmail:location.state.val.empmail,
  empphone:location.state.val.empphone,
  empaddress:location.state.val.empaddress
})
}else{
  setForm({...form,empname:'',
    empmail:'',
    empphone:'',
    empaddress:''
  })

}
  },[])
  function capValue(){
    if (location.state!=null) {
      axiosInstance.put('http://localhost:4000/emp/edit'+location.state.val._id,form).then((res)=>{
        alert(res.data.message)
        navigate('/emp')
      }).catch((err)=>{
       console.log(err)
      })
    } else {
      axiosInstance.post('http://localhost:4000/emp/add',form).then((res)=>{
        alert(res.data.message)
      }).catch((err)=>{
       console.log(err)
      })
    }
  }
 
      return (
        <Box
          sx={{
            flexGrow: 1,
            mt: '10%',
            ml: '20%',
            width: '50%',
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                name="empname"
                value={form.empname}
                id="name-outlined"onChange={(e) => setForm({ ...form, empname: e.target.value })}
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="empmail"
                value={form.empmail}
                id="email-outlined"onChange={(e) => setForm({ ...form, empmail: e.target.value })}
              /><br></br>
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                name="empphone"
                value={form.empphone}
                id="author-outlined"
                onChange={(e) => setForm({ ...form, empphone: e.target.value })}
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="description-outlined"
                label="Adddress"
                multiline
                rows={4}
                value={form.empaddress}
                name="empaddress"
                onChange={(e) => setForm({ ...form, empaddress: e.target.value })}
              />
            </Grid2>
          </Grid2>
          <br></br>
          <Button variant="contained" onClick={capValue} >
                Add Employee
              </Button>
             <Grid2>
              <Typography align="center" sx={{ color: 'darkblue' }}>
                <Link to="/" style={{ color: 'darkblue', textDecoration: 'none' }}>
                  Back to Home
                </Link>
              </Typography>
              </Grid2>
        </Box>
      );
    }
    
export default Empform